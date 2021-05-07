import React from "react"

import Typography from "@material-ui/core/Typography"

const about = () => {
  return (
    <div style={{ marginTop: 42, marginBottom: 84 }}>
      <Typography variant="h2">Nice to meet you!</Typography>
      <Typography variant="h6">
        {`\nI am a full stack developer who loves the combination of problem solving and creativity that programming offers.  I primarily develop in JavaScript, but I am constantly exploring and learning to expand my toolset.  I am an exceptionally quick learner and I have been acknowledged for my adaptability and ability to fit into a variety of teams and add value with        my approach to our work and my skills.
      
        I am based in Wellington where I live with my family. I am looking for permanent fulltime work, but am also open to contracts.`}
      </Typography>
    </div>
  )
}

export default about
