//Importing packages
import React from "react";
import NavBar from "./NavBar.js";
import bannerVideo from "../content/bannerVideo.mp4";
import bannerImage from "../content/icon.jpg";
import "./styles/Banner.css";
import MediaLink from "./MediaLink.js";

//Banner component
const Banner = () => {
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
        {/*Channel Icon*/}
        <img id="bannerIcon" src={bannerImage} />
        <div id="bannerText">
          {/*Channel name*/}
          <h1 id="bannerChannelName">Starii Bella.</h1>
          {/*Channel discription*/}
          <p id="bannerDiscription">Roblox edits, Gameplay and more!</p>
          {/*Subscribe link*/}
          <MediaLink
            borderColor="#ffff"
            textColor="black"
            borderRad="0.5rem"
            backgroundColor="#ffff"
            text="Subscribe!"
            link="https://www.youtube.com/channel/UCXc3hzORGb-osun3RcY0oOw"
          />
        </div>
      </div>
      {/*Background Video*/}
      <video src={bannerVideo} autoPlay loop muted id="bannerVideo" />
    </div>
  );
};

//Export component
export default Banner;
