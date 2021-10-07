//Importing packages
import React, { useEffect, useState } from "react";
import MediaLink from "./MediaLink.js";
import youtubeRequests, { youtubeEndPoint } from "../scripts/apiRequest.js";

//SubCount component
const SubCount = () => {
  //SubCount variable
  let [subCount, setSubCount] = useState("error");
  //Useffect hook
  useEffect(() => {
    //Get data from API

    youtubeRequests
      .get(youtubeEndPoint.subCount)
      .then((response) => {
        //Assign variables
        setSubCount(response.data.items[0].statistics.subscriberCount);
        i;
        console.log("[Debug]Fetching api data..");
      })
      //Error handling
      .catch((err) => {
        console.error(err);
        console.log(
          "[Debug]There was a error in SubCount.js line 21(In promise)"
        );
      });
  });
  //Render component
  return (
    <div style={{ backgroundColor: "#4b95df", padding: "7.5% 15% 15% 15%" }}>
      {/*Tittle*/}
      <h1
        style={{
          fontFamily: "Bebas Neue, cursive",
          color: "#ffff",
          fontSize: "4vw",
        }}
      >
        Total subscribers:
      </h1>
      {/*Subscription count*/}
      <h1 style={{ color: "#ffff" }}>{subCount}</h1>
      {/*Subscibe link*/}
      <div style={{ padding: ".5rem" }}>
        <MediaLink
          borderColor="#ffff"
          textColor="black"
          borderRad="0.5rem"
          backgroundColor="#ffff"
          text="SUBSCRIBE NOW!"
          link="https://www.bitlylinks.com/2raIfgwIY"
        />
      </div>
    </div>
  );
};

//Export component
export default SubCount;
