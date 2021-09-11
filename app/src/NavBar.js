import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const linkStyle = {
    color: props.color,
    backgroundColor: props.backgroundColor,
    display: flex,
  };
  return (
    <div>
      {/*Link to home page*/}
      <Link to="/" className="link" style={linkStyle}>
        Home
      </Link>
      {/*Link to videos page*/}
      <Link to="/videos" className="link" style={linkStyle}>
        Videos
      </Link>
      {/*Link to shop page*/}
      <Link to="/shop" className="link" style={linkStyle}>
        Shop
      </Link>
    </div>
  );
};

export default NavBar;
