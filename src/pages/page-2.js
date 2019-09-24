import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Post from "../components/Post"
import SideBar from "../components/SideBar"

const SecondPage = () => (
  <Layout>
    <div className="wrapper">
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
      <SideBar />
    </div>
    <Link to="/">Go to home page</Link>
  </Layout>
)

export default SecondPage
