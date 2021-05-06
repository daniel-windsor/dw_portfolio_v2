import React, { useState } from "react"

import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  nav:  {
    position: "fixed",
    top: "auto",
    bottom: 0
  }
}))

const Navbar = () => {
  const classes = useStyles()
  const [value, setValue] = useState(1)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar className={classes.nav}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Portfolio" value={1} />
        <Tab label="Contact Me" value={2} />
       </Tabs>
    </AppBar>
  )
}

export default Navbar
