import * as React from "react"
import PropTypes from "prop-types"

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import "./layout.css"

import Container from "@material-ui/core/Container"

import Navbar from "./navbar"

let theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: "3rem"
      }
    },
    MuiDialog: {
      paper: {
        overflowY: "visible"
      }
    }
    
  },
  typography: {
    body1: {
      whiteSpace: "pre-line"
    }
  }
})

theme = responsiveFontSizes(theme)

const Layout = ({ children }) => {
  return (
    <div style={{ width: "100%", minHeight: "100%" }}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          {children}
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </Container>
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
