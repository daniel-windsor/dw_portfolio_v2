import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  iconButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
}))

const PortfolioDialog = ({ name, descShort, descLong, images, onClose, cell }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const classes = useStyles()

  const handleChangeIndex = delta => {
    if (delta > 0 && imageIndex === images.length - 1) {
      setImageIndex(0)
      return
    } else if (delta < 0 && imageIndex === 0) {
      setImageIndex(images.length - 1)
      return
    }

    setImageIndex(imageIndex + delta)
  }

  return (
    <div className={classes.root} style={cell ? { width: 400 } : undefined}>
      {images.length && (
        <GatsbyImage image={images[imageIndex]} alt="" />
      )}
      <IconButton
        className={classes.iconButton}
        onClick={() => handleChangeIndex(-1)}
        style={{ left: -75, zIndex: 2000 }}
        color="primary"
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        onClick={() => handleChangeIndex(1)}
        style={{ right: -75 }}
        color="primary"
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  )
}

export default PortfolioDialog
