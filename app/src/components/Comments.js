//Importing packages
import React from "react";
import comment1 from "../content/Comment1.PNG";
import comment2 from "../content/Comment2.PNG";
import comment3 from "../content/Comment3.PNG";
import "./styles/Comments.css";

//Comment component
const Comments = () => {
  //Render component
  return (
    <div
      style={{
        backgroundColor: "#4b95df",
        padding: "3vw",
        margin: "0vw 0vw 3vw 0vw",
      }}
    >
      {/*Top level*/}
      <div id="topLevel">
        {/*Tittle text*/}
        <h1 style={{ color: "#ffff", fontFamily: "Bebas Neue, cursive" }}>
          What the viewers say:
        </h1>
        {/*Comments*/}
        <img src={comment1} id="comment"></img>
        <img src={comment2} id="comment"></img>
        <img src={comment3} id="comment"></img>
      </div>
    </div>
  );
};

//Export component
export default Comments;
