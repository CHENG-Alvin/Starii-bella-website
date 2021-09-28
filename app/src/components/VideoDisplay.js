import React, { useEffect } from "react";
import requests, { endPoint } from "../apiRequest.js";

const VideoDisplay = () => {
  useEffect(() => {
    let count = 0;
    let total = 0;
    let pageToken = undefined;
    let videoList = [];

    requests.get(endPoint.Videos).then((response) => {
      console.log(response);
      total = Math.ceil(response.data.pageInfo.totalResults / 50) - 2;

      //? Question: Connot implement loop in requests.
      requests
        .get(`${endPoint.Videos}&pageToken=${response.data.nextPageToken}`)
        .then((response) => {
          console.log(response);
          while (count < total) {}
        })
        .catch((errorMessage) => {
          console.error(errorMessage);
        });
    });
  });
  return <div></div>;
};

export default VideoDisplay;

//Notes:
//TODO - Connect to youtube api and get all videos from starii bella yt channel.
//! - Requred endpoint: endPoint.Videos
/*I have done requesting / getting the api endpoint data but is having trouble in implementing loop. at line: 17-28*/
