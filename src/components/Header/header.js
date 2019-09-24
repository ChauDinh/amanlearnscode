import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, description }) => (
  <header
    style={{
      background: `#fcfbf5 none repeat scroll top left`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, marginBottom: `1.0875rem` }}>
        <Link
          to="/"
          style={{
            color: `#6aa84f`,
            textDecoration: `none`,
            fontFamily: `Be Vietnam`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4
        style={{
          fontStyle: `italic`,
          fontWeight: `300`,
        }}
      >
        {description}
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
