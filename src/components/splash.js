import React from "react"

import Typography from "@material-ui/core/Typography"
import Fade from "@material-ui/core/Fade"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
}))
const Splash = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Fade in={true} timeout={600}>
        <div>
          <Typography variant="h1">Hi!</Typography>
          <Typography variant="h1">I'm Daniel,</Typography>
          <Typography variant="h1">A Web Developer</Typography>
        </div>
      </Fade>
    </div>
  )
}

export default Splash
