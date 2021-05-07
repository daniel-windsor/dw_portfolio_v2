import React, { useState } from "react"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles'
import { GatsbyImage } from "gatsby-plugin-image"

import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  cell: {
    width: 400,
    [theme.breakpoints.down('xs')]: {
      height: "80%",
      width: "auto"
    }
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
    [theme.breakpoints.down('sm')]: {
      top: "calc(100% + 24px)"
    }
  },
}))

const PortfolioDialog = ({ images, cell }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const classes = useStyles()
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

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
    <div className={`${classes.root} ${cell ? classes.cell : undefined}`}>
      {images.length && (
        <GatsbyImage image={images[imageIndex]} alt="" />
      )}
      <IconButton
        className={classes.iconButton}
        onClick={() => handleChangeIndex(-1)}
        style={{ left: mobile ? 0 : -75, zIndex: 2000 }}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        onClick={() => handleChangeIndex(1)}
        style={{ right: mobile ? 0 : -75 }}
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  )
}

export default PortfolioDialog
