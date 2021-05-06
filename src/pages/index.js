import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Splash from "../components/splash"
import Portfolio from "../components/portfolio"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Splash />
    <Portfolio />
  </Layout>
)

export default IndexPage
