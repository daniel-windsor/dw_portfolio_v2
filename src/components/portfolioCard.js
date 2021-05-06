import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Fade from "@material-ui/core/Fade"

import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  paper: {
    position: "relative",
    height: "100%",
    minHeight: 272,
    overflow: "hidden",
    cursor: "pointer"
  },
  image: {
    pointerEvents: "none",
    aspectRatio: "16/9",
  },
  textContainer: {
    padding: "1rem",
  },
  moreContainer: {
    position: "absolute",
    padding: "1rem",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  buttonBar: {
    position: "absolute",
    bottom: "1rem",
  },
}))

const PortfolioCard = ({ name, desc, images, link1, link2, onClick }) => {
  const classes = useStyles()
  const [showMore, setShowMore] = useState(null)

  const handleLink = (e, link) => {
    e.stopPropagation()
    window.open(link, "_blank")
  }

  return (
    <Paper
      onMouseEnter={() => setShowMore(true)}
      onMouseLeave={() => setShowMore(false)}
      className={classes.paper}
      onClick={onClick}
    >
      <Fade in={!showMore} timeout={showMore === null ? 0 : 300}>
        <div>
          <GatsbyImage image={images[0]} className={classes.image} alt="" />
          <div className={classes.textContainer}>
            <Typography variant="h6">{name}</Typography>
          </div>
        </div>
      </Fade>

      <Fade in={showMore} timeout={300}>
        <div className={classes.moreContainer}>
          <Typography variant="body1">{desc}</Typography>
          <div className={classes.buttonBar}>
            {link2 && (
              <Button onClick={e => handleLink(e, link2)}>Github</Button>
            )}
            {link1 && (
              <Button onClick={e => handleLink(e, link1)}>Website</Button>
            )}
          </div>
        </div>
      </Fade>
    </Paper>
  )
}

export default PortfolioCard
