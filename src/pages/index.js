import React from "react";
import '../css/styles.css';

import RoverProfile from "../components/RoverProfile";
import NavBar from "../components/NavBar";


export default function Home() {
   return(
    <div className="index">
      <NavBar />
      <RoverProfile />
   </div>
   ) 
}
