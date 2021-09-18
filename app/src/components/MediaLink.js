//Import packages
import React from "react";
import "./styles/MediaLink.css";
//Youtube component
const MediaLink = (props) => {
  //Styles:
  const linkStyle = {
    fontFamily: "Poppins, sans-serif" || props.fontFamily,
    border: `1px solid ${props.borderColor}`,
    color: props.textColor || "black",
    backgroundColor: props.backgroundColor || "transparent",
    borderRadius: props.borderRad,
    fontWeight: "bold",
    textDecoration: "none",
  };
  //Render component
  return (
    <div>
      {/*Link to*/}
      <a href={props.link} id="ytLink" style={linkStyle}>
        {props.text}
      </a>
    </div>
  );
};

//Export component
export default MediaLink;
