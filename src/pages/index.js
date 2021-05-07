import React from "react";
import '../css/styles.css';

import RoverProfile from "../components/RoverProfile";
import NavBar from "../components/NavBar";

import RoverPost from "../components/RoverPost";


export default function Home() {
   return(
    <div className="index">
      <NavBar />
      <div className="content">
        <RoverProfile />
        <RoverPost />
      </div>     
      
    </div>  
   ) 
}
