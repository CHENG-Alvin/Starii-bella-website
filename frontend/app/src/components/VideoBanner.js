//Importing packages
import React from "react";
import NavBar from "./NavBar.js";
import bannerVideo from "../content/VideoPageBanner.mp4";

import "./styles/VideoPageBanner.css";

//Banner component
const VideoBanner = () => {
  //Render component
  return (
    <div>
      {/*Navbar*/}
      <NavBar
        backgroundColor="transparent"
        color="white"
        id="bannerNavbar"
      ></NavBar>
      {/*Banner Content*/}
      <div id="bannerContent">
        <div id="bannerText">
          {/*Channel name*/}

          <h1 id="bannerChannelName">Page comming soon!</h1>
          {/*Channel discription*/}
          <p id="bannerDiscription"></p>
        </div>
      </div>
      {/*Background Video*/}
      <video src={bannerVideo} autoPlay loop muted id="bannerVideo" />
    </div>
  );
};

//Export component
export default VideoBanner;
