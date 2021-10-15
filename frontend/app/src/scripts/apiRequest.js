//Base URL https://www.googleapis.com/youtube/v3
//Importing packages
import dotenv from "dotenv";
import Axios from "axios";

//Env file setup
dotenv.config();

//Endpoints
export const youtubeEndPoint = {
    subCount: `/channels?part=statistics&id=UCXc3hzORGb-osun3RcY0oOw&key=${process.env.API_KEY}`,
    profile: `/channels?part=snipet&id=UCXc3hzORGb-osun3RcY0oOw&key=${process.env.API_KEY}`,
};

//Axios for youtube api
export const youtubeRequests = Axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});
