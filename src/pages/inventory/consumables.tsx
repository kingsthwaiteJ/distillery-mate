import { type ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import { Consumable } from "@/models/consumable";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/consumables", {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // Set the request headers to indicate JSON format
    },
  });
  const items = await response.json();

  return { props: { items } };
}

const Page: NextPageWithLayout = ({ items }) => {
  return (
    <div>
      <div>
        <Link
          href="/inventory/consumables/new"
          className="rounded-full border border-solid transition-colors flex items-center justify-center border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent md:w-[200px]"
        >
          Create Consumable
          <FontAwesomeIcon icon={["fas", "plus"]} />
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Brand</TableCell>
              <TableCell align="right">Price&nbsp;($)</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item: Consumable) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link href={"/inventory/consumables/" + item.id}>
                    {item.name}
                  </Link>
                </TableCell>
                <TableCell align="right">{item.brand}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.type}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout name="Consumables">{page}</Layout>;
};

export default Page;
