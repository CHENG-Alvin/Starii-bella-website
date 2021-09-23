//Importing packages
import React from "react";
import "./styles/HomeBanner.css";
import { Link } from "react-router-dom";

//Navbar component
const NavBar = (props) => {
  //Styles:
  const linkStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor,
    textDecoration: "none",
    fontSize: "1.5rem",
    fontFamily: "Poppins, sans-serif",
    padding: "1rem",
    fontWeight: "bold",
  };
  const parentStyle = {
    display: "flex",
    alignItems: "center",
    paddingTop: "40px",
  };
  const containerStyle = { margin: "auto" };

  //Rendering component
  return (
    <div style={parentStyle}>
      <div style={containerStyle}>
        {/*Link to home page*/}
        <Link to="/" className="link" style={linkStyle}>
          Home
        </Link>
        {/*Link to videos page*/}
        <Link to="/videos" className="link" style={linkStyle}>
          Content
        </Link>
        {/*Link to shop page*/}
        <Link to="/shop" className="link" style={linkStyle}>
          Shop
        </Link>
      </div>
    </div>
  );
};

//Export component
export default NavBar;
