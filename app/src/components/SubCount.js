//Importing packages
import React, { useEffect, useState } from "react";
import MediaLink from "./MediaLink.js";
import requests, { endPoint } from "../apiRequest.js";

//SubCount component
const SubCount = () => {
  //SubCount variable
  let [subCount, setSubCount] = useState("error");
  //Useffect hook
  useEffect(() => {
    //Get data from API

    requests
      .get(endPoint.subCount)
      .then((response) => {
        //! Error at Link 18
        setSubCount(response.data.items[0].statistics.subscriberCount);
      })
      .catch((err) => console.error(err));
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
      <MediaLink
        style={{ paddingTop: "2rem" }}
        borderColor="#ffff"
        textColor="black"
        borderRad="0.5rem"
        backgroundColor="#ffff"
        text="SUBSCRIBE NOW!"
        link="https://www.youtube.com/channel/UCXc3hzORGb-osun3RcY0oOw"
      />
    </div>
  );
};

//Export component
export default SubCount;
