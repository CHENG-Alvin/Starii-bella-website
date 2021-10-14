//Importing packages
import React from "react";

//Message Component
const Message = () => {
  //Render component
  return (
    <div>
      {/*Tittle*/}
      <h2
        style={{
          fontFamily: "Bebas Neue, cursive",
          paddingTop: "15vw",
          fontSize: "4vw",
        }}
      >

        A message from Starii Bella:
      </h2>
      {/*Message */}
      <h2
        style={{
          fontFamily: "Bebas Neue, cursive",

          padding: "0vw 10vw 0vw 10vw",
          fontSize: "3vw",

        }}
      >
        Hi lovelies! I hope you like my videos I’m gonna upload and my dream is
        to heat 100 subscribers this year! If you are ogs, then you’ll know my
        old channel was called gaming with Bella- games, but now it’s called
        Simply Metallic! My name is Bella and I hope you love my video! Also
        welcome to Starii Bella ୨୧
      </h2>

      <div
        style={{
          height: "1vw",
          width: "17vw",
          backgroundColor: "#3cdfdd",

          position: "relative",
          top: "0",
          marginBottom: "2rem",
          left: "40%",
        }}
      />

    </div>
  );
};

//Export component
export default Message;

