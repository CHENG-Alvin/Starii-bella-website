//Importing packages
import React from "react";
import MediaLink from "./MediaLink.js";

//ChannelLink component
const ChannelLink = () => {
  return (
    <div style={{ backgroundColor: "#4b95df", padding: "6vw" }}>
      {/*Tittle*/}
      <strong
        style={{
          fontSize: "5vw",
          fontFamily: "Bebas Neue, cursive",
          color: "#fff",
        }}
      >
        ALSO SUBSCRIBE TO SWAGGYDINOS!!
      </strong>
      {/*Link*/}
      <div style={{ padding: "3vw" }}>
        <MediaLink
          id="mediaLinks"
          textColor="white"
          text="SUBSCRIBE TO SWAGGYDINOS"
          backgroundColor="red"
          borderRad="0px"
          borderColor="#4b95df"
          link="https://www.youtube.com/channel/UC3wdFUo2NqeQxg0_u6-M8QQ"
          fontFamily="Bebas Neue, cursive"
        />
      </div>
    </div>
  );
};

///Export component
export default ChannelLink;
