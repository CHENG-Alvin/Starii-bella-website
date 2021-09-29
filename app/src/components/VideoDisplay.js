import React, { useEffect } from "react";
import videoList from "./getVideos.js";
const VideoDisplay = () => {
  useEffect(() => {
    console.log(videoList);
  }, []);
  return <div></div>;
};

export default VideoDisplay;
