import type { ReactElement } from 'react'
import Layout from '../../components/layout'
import type { NextPageWithLayout } from './../_app'
 
const Page: NextPageWithLayout = () => {

  return (
    <div>
      
    </div>
  );
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout name="Recipes">
      {page}
    </Layout>
  )
}
 
export default Page;
