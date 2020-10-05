import React from "react";
import "./preloader.css";

function Preloader() {
  return (
    <div className="load-contact">
      <div>
        <span className="material-icons">search</span>
      </div>
      <input type="text" placeholder="Search message" />
      <div id="circularG">
        <p>Updating...</p>
        <div id="circularG_1" className="circularG"></div>
        <div id="circularG_2" className="circularG"></div>
        <div id="circularG_3" className="circularG"></div>
        <div id="circularG_4" className="circularG"></div>
        <div id="circularG_5" className="circularG"></div>
        <div id="circularG_6" className="circularG"></div>
        <div id="circularG_7" className="circularG"></div>
        <div id="circularG_8" className="circularG"></div>
      </div>
      <div>
        <span id="settings" className="material-icons">
          settings
        </span>
      </div>
    </div>
  );
}

export default Preloader;
