import React, { useState } from "react"

import Typography from "@material-ui/core/Typography"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    transition: "all 0.5s ease",
    cursor: "pointer",
  },
  expanded: {
    transform: "translateX(-60px)",
    transition: "all 0.5s ease",
  },
  text: {
    paddingLeft: "1rem",
    opacity: 0,
    transition: "all 0.5s ease",
  },
  textExpand: {
    opacity: 1,
    transition: "all 0.5s ease",
  },
}))

const ContactButton = ({ name, icon, link }) => {
  const [expand, setExpand] = useState(false)
  const classes = useStyles()

  return (
    <div
      onMouseEnter={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
      onClick={() => window.open(link, '_blank')}
      className={`${classes.root} ${expand ? classes.expanded : undefined}`}
    >
      {icon}
      <Typography
        variant="h6"
        className={`${classes.text} ${expand ? classes.textExpand : undefined}`}
      >
        {name}
      </Typography>
    </div>
  )
}

export default ContactButton
