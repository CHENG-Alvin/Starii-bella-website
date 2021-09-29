//Importing packages
import React from "react";
import NavBar from "./NavBar.js";
import bannerVideo from "../content/VideoPageBanner.mp4";
import "./styles/CommingSoon.css";

//Banner component
const CommingSoon = () => {
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
          {/*Message*/}
          <h1 id="bannerChannelName">Page comming soon!</h1>
        </div>
      </div>
      {/*Background Video*/}
      <video src={bannerVideo} autoPlay loop muted id="bannerVideo" />
    </div>
  );
};

//Export component
export default CommingSoon;
