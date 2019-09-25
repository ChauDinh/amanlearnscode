import React from "react"

const PostDate = ({ date }) => {
  return (
    <p
      style={{
        color: `#f5f5f5`,
        fontWeight: `bolder`,
        fontSize: `.7rem`,
        background: `#6aa84f`,
        marginBottom: `1rem`,
        borderRadius: `10px 10px 0 0`,
        paddingLeft: `0.7567rem`,
      }}
    >
      {date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
    </p>
  )
}

export default PostDate
