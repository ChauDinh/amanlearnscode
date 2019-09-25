import React from "react"
import "./post.css"
import PostDate from "./PostDate"
import PostTitle from "./PostTitle"
import PostContent from "./PostContent"

const Post = () => {
  return (
    <div className="single_blog-post">
      <PostDate date={new Date("September 24, 2019")} />
      <PostTitle title="Design A Slack Clone Application" />
      <PostContent />
    </div>
  )
}

export default Post
