import * as React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title={`404 Page`}/>
      <div>Page not found</div>
    </Layout>
  )
}

export default NotFoundPage;