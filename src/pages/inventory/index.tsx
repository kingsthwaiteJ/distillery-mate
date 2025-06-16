import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "./../_app";
import Link from "next/link";

const Page: NextPageWithLayout = () => {
  return (
    <div className="box-container">
      <Link href="/inventory/consumables" className="box">
        <div>
          <h2>Consumables</h2>
        </div>
      </Link>
      <br />
      <br />
      <Link href="/inventory/equipment" className="box">
        <div>
          <h2>Equipment</h2>
        </div>
      </Link>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout name="Inventory">{page}</Layout>;
};

export default Page;
