import React, { useState } from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import { makeStyles } from "@material-ui/core/styles"

import IconButton from "@material-ui/core/IconButton"
import EmailIcon from "@material-ui/icons/Email"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"

import ContactButton from "./contactButton"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    right: -60,
    top: "50%",
    transform: "translateY(-50%)",
    padding: "1rem",
    [theme.breakpoints.between("md", "lg")]: {
      top: 0,
      right: -216,
      transform: "translateY(0)",
      display: "flex",
      transition: "all 0.3s ease",
    },
  },
  expandOpen: {
    transform: "translateX(-216px)",
    transition: "all 0.3s ease",
    backgroundColor: "#212026a90",
    borderRadius: "0 0 0 5px",
  },
  expandBtnClose: {
    transform: "rotate(0deg)",
    transition: "all 0.3s ease",
  },
  expandBtnOpen: {
    transform: "rotate(180deg)",
    transition: "all 0.3s ease",
  },
  bottomContact: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    "&:button": {
      margin: "1rem"
    }
  }
}))

const details = [
  {
    name: "Email",
    icon: <EmailIcon />,
    link: "mailto:daniel.windsor@protonmail.com",
  },
  {
    name: "Linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/daniel-windsor-7785361a7/",
  },
  {
    name: "Github",
    icon: <GitHubIcon />,
    link: "https://github.com/daniel-windsor",
  },
]

const Contact = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [expand, setExpand] = useState(false)

  return (
    <>
      {useMediaQuery(theme.breakpoints.up("xl")) && (
        <div className={classes.root}>
          {details.map((detail, i) => (
            <ContactButton key={i} {...detail} />
          ))}
        </div>
      )}

      {useMediaQuery(theme.breakpoints.between("md", "lg")) && (
        <div
          className={`${classes.root} ${
            expand ? classes.expandOpen : undefined
          }`}
        >
          <IconButton onClick={() => setExpand(!expand)}>
            <ChevronLeftIcon
              className={
                expand ? classes.expandBtnOpen : classes.expandBtnClose
              }
            />
          </IconButton>

          {details.map(({ icon, link }, i) => (
            <IconButton onClick={() => window.open(link, "_blank")} key={i}>
              {icon}
            </IconButton>
          ))}
        </div>
      )}

      <div style={{ marginTop: 42, marginBottom: 84 }}>
        <Typography variant="h2">Why not get in touch?</Typography>

        <div className={classes.bottomContact}>
          {details.map(({ icon, link }, i) => (
            <IconButton onClick={() => window.open(link, "_blank")} key={i}>
              {icon}
            </IconButton>
          ))}
        </div>
      </div>
    </>
  )
}

export default Contact
