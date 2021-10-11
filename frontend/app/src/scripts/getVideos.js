//Importing packages
import requests, { endPoint } from "./apiRequest.js";
//Get video data
let videoList = [];

const getVideos = () => {
  let total = 0;
  let count = 0;
  let pageToken = undefined;
  requests
    .get(endPoint.videos)
    .then((response) => {
      pageToken = response.data.nextPageToken;
      total = Math.ceil(response.data.pageInfo.totalResults / 50 - 1);
      while (count < total) {
        requests
          .get(`${endPoint.videos}&pageToken=${pageToken}`)
          .then((responseData) => {
            console.log(responseData);
            pageToken = responseData.data.nextPageToken;
          })
          .catch((errorMessage) => {
            console.error(errorMessage);
          });
        count += 1;
      }
    })
    .catch((error) => {
      console.error(error);
      console.log(
        "[Debug] An application error occurred at:\ngetVideos.js(In promise)\nPlease submit all the messgages to the github issues page. "
      );
    });
};
getVideos();
//Export variables
export default videoList;

//Notes:
/*Today I have put the api code in another file instead of in the main comopnent.
And I also found some bugs in the loop listed below: */

//TODO - remove /  rewrite this loop where bug found.
//! BUG in loop at line: #27 getVideos.js
//Bug note: this bug outputs and array which is 150.0 elements long, this also means that the loop ran 3 times correctly
