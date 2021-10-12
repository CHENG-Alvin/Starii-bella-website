//Importing packages
import React from "react";
import VideoDisplay from "./VideoDisplay.js";
import VideoBanner from "./VideoBanner.js";

//Shop page
const Videos = () => {
  //Render component
  return (
    <div>
      <VideoBanner />
      <VideoDisplay />
    </div>
  );
};

//Export component
export default Videos;
