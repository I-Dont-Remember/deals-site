import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, navigate } from "gatsby"

import "./layout.css"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

// theme junk https://material-ui.com/customization/themes/#palette
const theme = createMuiTheme({
  palette: {
    type: "light", // can change to dark theme easily
    primary: { main: "#c7050c" },
    secondary: { main: "#fff" },
  },
  // this removes the typography deprecation warnings cuz using v2 goodies
  typography: { useNextVariants: true },
})

const Layout = ({ children, page }) => (
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
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
