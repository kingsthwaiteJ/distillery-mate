import type { ReactElement } from 'react'
import Layout from '../../components/layout'
import type { NextPageWithLayout } from './../_app'
import Image from 'next/image';
import Link from 'next/link';
 
const Page: NextPageWithLayout = () => {
  return (
    <div>
      
    </div>
  );
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout name="Recipe">
      {page}
    </Layout>
  )
}
 
export default Page;
