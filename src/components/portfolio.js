import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Dialog from "@material-ui/core/Dialog"

import PortfolioCard from "./portfolioCard"
import PortfolioDialog from "./portfolioDialog"

import projects from "../data/portfolio.json"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "png" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(width: 800, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  `)

  const [activeProject, setActiveProject] = useState(null)

  const filterImage = key => {
    const images = data.allFile.edges.reduce((acc, file) => {
      if (file.node.name.includes(key)) {
        if (file.node.name.includes("0")) acc.unshift(getImage(file.node))
        else acc.push(getImage(file.node))
      }

      return acc
    }, [])

    return images
  }

  return (
    <div style={{ marginTop: 42, marginBottom: 84 }}>
      <Typography variant="h2">My Portfolio</Typography>

      <Grid container spacing={2} style={{ marginTop: 28 }}>
        {projects.map((project, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <PortfolioCard
                {...project}
                images={filterImage(project.imageKey)}
                onClick={() => setActiveProject(project)}
              />
            </Grid>
          )
        })}
      </Grid>

      <Dialog
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        maxWidth="lg"
        style={{ overflow: "auto" }}
      >
        <PortfolioDialog
          {...activeProject}
          images={filterImage(activeProject?.imageKey)}
        />
      </Dialog>
    </div>
  )
}

export default Portfolio
