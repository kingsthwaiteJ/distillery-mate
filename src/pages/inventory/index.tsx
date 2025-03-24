import type { ReactElement } from 'react'
import Layout from '../../components/layout'
import type { NextPageWithLayout } from './../_app'
import Image from 'next/image';
import Link from 'next/link';

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <Link href="/inventory/consumables">
        Consumables
      </Link>
      <br/>
      <br/>
      <Link href="/inventory/equipment">
        Equipment
      </Link>
    </div>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout name="Inventory">
      {page}
    </Layout>
  )
}
 
export default Page;