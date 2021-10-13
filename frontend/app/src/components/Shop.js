//Importing packages
import React from "react";
import { Link } from "react-router-dom";

//Shop page
const Shop = () => {
  //Render component
  return (
    <div>
      {/*On screen text*/}
      <h1
        style={{
          fontFamily: "Brush Script MT, Brush Script Std, cursive",
          color: "black",
          fontSize: "60px",
          paddingTop: "20vh",
        }}
      >
        Comming soon...
      </h1>
      {/*Back to home link*/}
      <Link
        style={{
          textDecoration: "none",

          backgroundColor: "black",
          padding: "1rem",
          borderRadius: ".5rem",
          fontFamily: "Poppins, sans-serif",
          color: "#fff",
        }}
        to="/"
      >
        Back to home
      </Link>
    </div>
  );
};

//Export component
export default Shop;
