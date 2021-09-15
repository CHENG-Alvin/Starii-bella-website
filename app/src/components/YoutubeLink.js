//Import packages
import React from "react";

//Youtube component
const YoutubeLink = (props) => {
  //Styles:
  const linkStyle = {
    fontFamily: "Poppins, sans-serif" || props.fontFamily,
    border: `1px solid ${props.borderColor}`,
    color: props.textColor || "black",
    backgroundColor: props.backgroundColor || "transparent",
    borderRadius: props.borderRad,
    width: "10rem",
    height: "3rem",
    fontWeight: "bold",
    textDecoration: "none",
    padding: ".7rem",
  };
  //Render component
  return (
    <div>
      {/*Link to: https://www.youtube.com/channel/UCXc3hzORGb-osun3RcY0oOw*/}
      <a
        href="https://www.youtube.com/channel/UCXc3hzORGb-osun3RcY0oOw"
        id="ytLink"
        style={linkStyle}
      >
        {props.text}
      </a>
    </div>
  );
};

//Export component
export default YoutubeLink;
