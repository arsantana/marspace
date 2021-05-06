import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RoverProfile() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = 'PGnGcdJW5GMx3XEqDByRZ9sCX4aG5xLUOfjs2dBL';
    const END_POINT = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

    useEffect(() => {
        axios(END_POINT)
          .then((response) => {
              console.log("response: ", response.data)
              setData(response.data);

              var daysReceived = response.data.sol_keys;
              var lastday = daysReceived[daysReceived.length-1];

              var windSpeed = -1;

              if (response.data[lastday].HWS) {
                windSpeed = response.data[lastday].HWS.av;
              } else {
                windSpeed = "Not Available";
              }

              console.log("another response: ", response.data[lastday].Last_UTC);
          })
          .catch((error) => {
              console.error("Error fetching data: ", error);
              setError(error);
          })
          .finally(() => {
              setLoading(false);
          });
    }, []);

    if (loading) return "Loading ...";
    if (error) return "Error!";

    return(
        <div className="roverCard">
            <h1 className="roverName">Insight</h1>
            <div className="roverImage"></div>
            <h3 className="roverLocation">Location:</h3>
            <h3 className="roverLastActive">Last Active:</h3>
            <p className="roverBio">Interior Exploration using Seismic Investigations, Geodesy and Heat Transport, but you can call me InSight!</p>
        </div>
    )
}
