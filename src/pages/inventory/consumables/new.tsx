import { type ReactElement } from "react";
import Layout from "../../../components/layout";
import type { NextPageWithLayout } from "./../../_app";
import CreateConsumableForm from "../../../components/create_consumable";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <CreateConsumableForm />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout name="Consumables">{page}</Layout>;
};

export default Page;
