//Importing packages
import React from "react";
import MediaLink from "./MediaLink.js";
import "./styles/Link.css";

//Link component
const Links = (props) => {
  //Render component
  return (
    <div id="whole">
      {/*Tittle*/}
      <h1 id="tittle" style={{ fontSize: "4vw" }}>
        {props.tittle}
      </h1>

      {/*Link*/}
      <MediaLink
        id="mediaLinks"
        textColor="#4b95df"
        text={props.btnText}
        backgroundColor="white"
        borderRad="9vh"
        borderColor="#4b95df"
        link={props.link}
        fontFamily="Bebas Neue, cursive"
      />
      {/*Image*/}
      <img
        id="icon"
        alt="Error"
        src={props.imgSrc}
        style={{
          objectFit: "contain",
          borderRadius: props.borderRad || "0px",
          padding: props.iconPadding || "0px",
        }}
      ></img>
    </div>
  );
};

//Export component
export default Links;
