import React from "react";
import "../css/Loader.css";
import logo from "../assets/logo.png.jpg";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <img src={logo} alt="logo" className="pulse-logo" />
      <p className="loader-text">Corteiz Thrifters...</p>
    </div>
  );
};

export default Loader;