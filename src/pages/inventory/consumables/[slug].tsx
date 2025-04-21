import { type ReactElement } from "react";
import Layout from "../../../components/layout";
import type { NextPageWithLayout } from "../../_app";
import { MenuItem, TextField } from "@mui/material";

export async function getServerSideProps(context: any) {
  const response = await fetch(
    `http://localhost:3000/api/consumables/${context.params.slug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set the request headers to indicate JSON format
      },
    }
  );
  const items = await response.json();
  console.log(items);

  return { props: { item: items[0] } };
}

const Page: NextPageWithLayout = ({ item }) => {
  return (
    <div>
      <TextField
        label="Name"
        name="name"
        value={item.name}
        required
        fullWidth
      />
      <TextField
        label="Brand"
        name="brand"
        value={item.brand}
        required
        fullWidth
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        value={item.price}
        required
        fullWidth
      />
      <TextField
        select
        label="Type"
        name="type"
        value={item.type}
        required
        fullWidth
      >
        <MenuItem value="Electronics">Electronics</MenuItem>
        <MenuItem value="Furniture">Furniture</MenuItem>
        <MenuItem value="Clothing">Clothing</MenuItem>
      </TextField>
      <TextField
        label="Quantity"
        name="quantity"
        type="number"
        value={item.quantity}
        required
        fullWidth
      />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout name="Test">{page}</Layout>;
};

export default Page;
