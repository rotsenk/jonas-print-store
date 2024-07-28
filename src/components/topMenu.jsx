import React from "react";

function TopMenu({ w3_open }) {
  return (
    <div className="w3-top">
      <div className="w3-white w3-xlarge" style={{ maxWidth: "1200px", margin: "auto" }}>
        <button className="w3-button w3-padding-16 w3-left" onClick={w3_open}>
          ☰
        </button>
        <div className="w3-right w3-padding-16">
          <img src="/images/jonasPrint-logo.png" alt="Logo" style={{ height: "40px" }} />
        </div>
        <div className="w3-center w3-padding-16">Jonas Print Store</div>
      </div>
    </div>
  );
}

export default TopMenu;
