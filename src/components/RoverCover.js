import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default function RoverCover() {
  return(
    <div className="roverCover">
      <StaticImage 
        src="../images/sirenum-fossae-mars.jpg" 
        alt="Sirenum Fossae, Mars" 
        className="roverCoverImg" 
        
        height={250}
      />
    </div>
  )
}