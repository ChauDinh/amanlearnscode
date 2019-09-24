import React from "react"
import "./post.css"

const Post = () => {
  const date = new Date("September 24, 2019")
  console.log(date.getMonth())
  return (
    <div className="single_blog-post">
      <p
        style={{
          color: `#333`,
          fontWeight: `bolder`,
          fontSize: `.7rem`,
        }}
      >
        {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
      </p>
      <h3 className="post-title">Design A Slack Clone Application</h3>
      <p className="post-content">I love Latin so I speak Lorem</p>
      <h5 className="post-content__sub-heading">What is Lorem?</h5>
      <p className="post-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  )
}

export default Post
