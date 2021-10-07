//Base URL https://www.googleapis.com/youtube/v3
//Importing packages
import { YOUTUBE_API_KEY } from "./vars.js";
import Axios from "axios";

//Youtube API endpoints
export const youtubeEndPoint = {
  subCount: `/channels?part=statistics&id=UCXc3hzORGb-osun3RcY0oOw&key=${YOUTUBE_API_KEY}`,
  videos: `/search?part=snippet&channelId=UCXc3hzORGb-osun3RcY0oOw&maxResults=500&key=${YOUTUBE_API_KEY}`,
};

//Youtube Axios setup
export const youtubeRequests = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

//Partner Axios setup
////export const partnerRequests = Axios.create({baseURL:"",})
