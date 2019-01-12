import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import { Typography } from "@material-ui/core"

const oldHeader = ({ siteTitle }) => (
  <div
    style={{
      background: `#f6755e`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

const Header = ({ siteTitle }) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <div>
          <SearchIcon />
        </div>
        <InputBase placeholder="Search..." />
      </Toolbar>
    </AppBar>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
