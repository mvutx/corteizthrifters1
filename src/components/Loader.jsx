import React from "react";
import "../css/Loader.css";
import logo from "../assets/sacredlogo.png";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={logo} alt="logo" className="pulse-logo" />
      <p className="loader-text">Sacred Vanity...</p>
    </div>
  );
};

export default Loader;