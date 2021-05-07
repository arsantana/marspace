import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import { StaticImage } from "gatsby-plugin-image"

export default function RoverPost() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
     
    const API_KEY = 'PGnGcdJW5GMx3XEqDByRZ9sCX4aG5xLUOfjs2dBL';
    axios(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${API_KEY}`)
    .then((response) => {
      setData(response.data);
      console.log('This is the response from ROverPost: ', response.data.latest_photos);
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
    <div className="roverPost">
      <div className="roverPost-details">
        <StaticImage 
          src="../images/mars-2020-mast-head.jpeg"
          alt="Perseverance Rover Mast Head"
          className="roverPost-thumb"
          height={50}
          width={50}
        />
        <div className="roverPost-info">
          <p className="roverPost-name">Perseverance</p>
          <p className="roverPost-sol">SOL: 75</p>
          <p className="roverPost-day">Earth: 2021-05-06</p>
        </div>
      </div>
      <div className="roverPost-caption">
          <p>This photo was taken with my {data.latest_photos[0].camera.name} camera, or {data.latest_photos[0].camera.full_name}, on Sol {data.latest_photos[0].sol}. </p>
          <br />
        </div>
      <div className="roverPost-image">
        <img
          src={data.latest_photos[0].img_src}
          className="roverPost-image"
        />
      </div>
    </div>
  )
}