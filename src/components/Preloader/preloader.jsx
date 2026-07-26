import React from "react";
import "./preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="circle-preloader"></div>
      <p className="preloader-text">Searching for quotes...</p>
    </div>
  );
}

export default Preloader;
