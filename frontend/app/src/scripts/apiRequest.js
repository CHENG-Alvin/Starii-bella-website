//Base URL https://www.googleapis.com/youtube/v3
//Importing packages
import { YOUTUBE_API_KEY } from "./vars.js";
import Axios from "axios";

//Endpoints
export const endPoint = {
  subCount: `/channels?part=statistics&id=UCXc3hzORGb-osun3RcY0oOw&key=${YOUTUBE_API_KEY}`,
  videos: `/search?part=snippet&channelId=UCXc3hzORGb-osun3RcY0oOw&maxResults=500&key=${YOUTUBE_API_KEY}`,
};

//Axios setup
const requests = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

//Export variables
export default requests;
