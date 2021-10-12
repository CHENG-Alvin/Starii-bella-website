//Importing packages
/*import requests, { endPoint } from "../apiRequest.js";

//Get video data
//Declear variables
let count = 0;
let total = 0;
let pageToken = undefined;
let videoList = [];
let assigned = false;

//Get data from API
requests.get(endPoint.Videos).then((data) => {
  console.log(data);

  //Calculate total number of videos
  total = Math.ceil(data.data.pageInfo.totalResults / 50) - 2;

  //Get data from API
  requests
    .get(`${endPoint.Videos}&pageToken=${data.data.nextPageToken}`)
    .then((res) => {
      console.log(res);
      //Assign variable
      assigned = true;
      console.log(count < total);
      //Loop through video pages
      while (count < total) {
        //Assign page token

        if (assigned) pageToken = res.data.nextPageToken;

        //Try & catch statment
        try {
          //Get data from API
          requests
            .get(`${endPoint.Videos}&pageToken=${pageToken}`)
            .then((response) => {
              pageToken = response.data.nextPageToken;
              assigned = false;

              //Map through video array
              response.data.items.map((dataSet) => {
                videoList.push(dataSet.id.videoId);
              });
              return response.data.nextPageToken;
            })
            .then((token) => {
              pageToken = token;
            });
        } catch (errorMessage) {
          //Catch / print the unexpected errors
          console.error(errorMessage);
        }

        //Incrates count
        count += 1;
        console.log(videoList);
      }
    }) //Catch the unexpected error
    .catch((errorMessage) => {
      console.error(errorMessage);
    });
});

//Export variables
export default videoList;

*/
//Notes:
/*Today I have put the api code in another file instead of in the main comopnent.
And I also found some bugs in the loop listed below: */

//TODO - remove /  rewrite this loop where bug found.
//! BUG in loop at line: #27 getVideos.js
//Bug note: this bug outputs and array which is 150.0 elements long, this also means that the loop ran 3 times correctly
//? how to fix bug in loop at line: #27 getVideo.js
