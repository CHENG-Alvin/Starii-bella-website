import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  const linkStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor,
    textDecoration: "none",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontFamily: "helvetica, Segoe UI",
    padding: "1rem",
  };
  const parentStyle = {
    display: "flex",
    alignItems: "center",
    paddingTop: "40px",
  };
  const containerStyle = { margin: "auto" };
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
export default NavBar;
