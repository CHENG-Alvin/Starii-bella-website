//Importing packages
import React from "react";
import MediaLink from "./MediaLink.js";

//ChannelLink component
const ChannelLink = () => {
  return (
    <div style={{ backgroundColor: "#4b95df", padding: "5vw" }}>
      {/*Tittle*/}
      <h1
        style={{
          fontSize: "4vw",
          fontFamily: "Bebas Neue, cursive",
          color: "#fff",
        }}
      >
        ALSO SUBSCRIBE TO SWAGGYDINOS!!
      </h1>
      {/*Link*/}
      <div style={{ padding: "3vw" }}>
        <MediaLink
          id="mediaLinks"
          textColor="white"
          text="SUBSCRIBE TO SWAGGYDINOS"
          backgroundColor="red"
          borderRad="0px"
          borderColor="#4b95df"
          link="https://www.bitlylinks.com/aswPnQ3Ah"
        />
      </div>
    </div>
  );
};

///Export component
export default ChannelLink;
