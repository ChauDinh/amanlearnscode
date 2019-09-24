import React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        background: `#fcfbf5`,
        padding: `1.45rem auto`,
        margin: `0 auto`,
        textAlign: `center`,
        fontFamily: `sans-serif`,
      }}
    >
      ChauDinh, Awesome Inc. theme © {new Date().getFullYear()}, built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
