import React from "react";
import NavBar from "./NavBar.js";
import bannerVideo from "../content/WIN_20210912_09_19_38_Pro.mp4";
const Banner = () => {
  return (
    <div>
      <NavBar backgroundColor="transparent" color="white"></NavBar>
      <video src={bannerVideo} autoPlay loop />
    </div>
  );
};

export default Banner;
