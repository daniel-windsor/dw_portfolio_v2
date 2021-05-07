import * as React from "react"
import PropTypes from "prop-types"

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import "./layout.css"

import Container from "@material-ui/core/Container"
import Game from "./game"

let theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: "3rem",
      },
    },
    MuiDialog: {
      paper: {
        overflowY: "visible",
      },
    },
  },
  typography: {
    h6: {
      whiteSpace: "pre-line",
    },
    body1: {
      whiteSpace: "pre-line",
    },
  },
  palette: {
    type: "dark",
    background: {
      default: "#212026"
    }
  },
})

theme = responsiveFontSizes(theme)

const Layout = ({ children }) => {
  return (
    <div style={{ width: "100%", minHeight: "100%" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Game />
        <Container style={{ zIndex: 1 }}>{children}</Container>
      </ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
