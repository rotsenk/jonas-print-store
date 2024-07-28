import React from "react";

function Sidebar({ sidebarVisible, w3_close }) {
  return (
    <nav
      className={`w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left ${sidebarVisible ? "w3-show" : "w3-hide"}`}
      style={{ zIndex: 2, width: "40%", minWidth: "300px" }}
    >
      <button onClick={w3_close} className="w3-bar-item w3-button">
        Close Menu
      </button>
      <a href="#food" onClick={w3_close} className="w3-bar-item w3-button">
        Our work
      </a>
      <a href="#about" onClick={w3_close} className="w3-bar-item w3-button">
        About
      </a>
    </nav>
  );
}

export default Sidebar;
