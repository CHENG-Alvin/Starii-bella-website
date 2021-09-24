////////////////////////////////!!!! IN DEVELOPMENT!!!!////////////////////////////////////////////////////

//Importing packages
import React, { useEffect } from "react";
import NavBar from "./NavBar.js";
import bannerVideo from "../content/VideoPageBanner.mp4";
import { API_KEY } from "../vars.js";
import "./styles/VideoPageBanner.css";

//Banner component
const VideoBanner = () => {
  useEffect(() => {
    try {
      fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UCXc3hzORGb-osun3RcY0oOw&key=${API_KEY}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);
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
          <h1 id="bannerChannelName">Latest on Starii Bella:</h1>
          {/*Channel discription*/}
          <p id="bannerDiscription">Roblox edits, Gameplay and more!</p>
        </div>
      </div>
      {/*Background Video*/}
      <video src={bannerVideo} autoPlay loop muted id="bannerVideo" />
    </div>
  );
};

//Export component
export default VideoBanner;
