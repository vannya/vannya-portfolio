import React from "react";
import NavBar from "./NavBar";
import logo from "../../stylesheets/assets/logo.jpg";

const Header = props => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="" />
        <div className="header-subtitle">Front End Developer</div> 
      </div>
      <NavBar />
    </div>
  );
};

export default Header;
