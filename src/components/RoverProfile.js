import React, { useState, useEffect } from "react";
import axios from 'axios';
import { StaticImage } from "gatsby-plugin-image"

export default function RoverProfile() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
     
    const API_KEY = 'PGnGcdJW5GMx3XEqDByRZ9sCX4aG5xLUOfjs2dBL';
    axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${API_KEY}`)
    .then((response) => {
      setData(response.data);
      console.log('This is the response: ', response.data.latest_photos[0].sol);
    })
    .catch((error) => {
      console.error("Error Fetching Data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
   }, []);

   if (loading) return "Loading ..";
   if (error) return "Error!";

    return(
        <div className="roverCard">
            <h1 className="roverName">Persy</h1>
            <StaticImage 
              src="../images/mars-2020-mast-head.jpeg" 
              alt="Sirenum Fossae, Mars" 
              className="roverImage" 
            /><br />
            <p className="roverBio">Living my best life at Jezero Crater with my best bud, @Ingenuity!</p><br />
            <h4 className="roverLocation">Location: Jezero Crater, Mars</h4><br/>
            <h4 className="roverLastActive">Status: {data.latest_photos[0].rover.status} </h4><br/>
            
            <p>SOL: {data.latest_photos[0].sol}</p>
            <p>Earth Date: {data.latest_photos[0].earth_date}</p>
        </div>
    )
}
