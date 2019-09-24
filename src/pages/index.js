import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Post from "../components/Post/index"
import SideBar from "../components/SideBar"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <div className="wrapper">
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
      <SideBar />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
