import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./layout.css"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

// theme junk https://material-ui.com/customization/themes/#palette
const theme = createMuiTheme({
  palette: {
    type: "light", // can change to dark theme easily
    primary: { main: "#f6755e" },
    secondary: { main: "#00bcd4" },
  },
  // this removes the typography deprecation warnings cuz using v2 goodies
  typography: { useNextVariants: true },
})

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
