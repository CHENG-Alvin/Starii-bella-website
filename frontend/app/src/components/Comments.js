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
        padding: "4vw",
        margin: "0vw 0vw 3vw 0vw",
      }}
    >
      {/*Top level*/}
      <div id="topLevel">
        {/*Tittle text*/}

        <h1
          style={{
            color: "#ffff",
            fontFamily: "Bebas Neue, cursive",
            fontSize: "4vw",
          }}
        >
          What the viewers say:
        </h1>
        {/*Comments*/}
        <img
          src={comment1}
          id="comment"
          alt="error"
          style={{ width: "30vw", objectFit: "contain", marginLeft: "2vw" }}
        ></img>
        <img
          src={comment2}
          id="comment"
          alt="error"
          style={{ width: "30vw", objectFit: "contain", marginRight: "5vw" }}
        ></img>
        <img
          src={comment3}
          id="comment"
          alt="error"
          style={{ width: "30vw", objectFit: "contain", marginRight: "2vw" }}
        ></img>
      </div>
    </div>
  );
};

//Export component
export default Comments;
