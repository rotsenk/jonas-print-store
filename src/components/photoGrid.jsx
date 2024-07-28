import React from "react";

function PhotoGrid() {
  return (
    <>
      <h3 className="w3-padding-32 w3-center">Our Work</h3>
      <div className="w3-row-padding w3-padding-16 w3-center" id="food">
        <div className="w3-quarter">
          <img
            src="/images/charm-style.png"
            alt="charm-style"
            style={{ width: "100%" }}
          />
          <h3>Charm Style</h3>
        </div>
        <div className="w3-quarter">
          <img
            src="/images/colorcraft-logo.png"
            alt="colorcraft-logo"
            style={{ width: "100%" }}
          />
          <h3>Colorcraft</h3>
        </div>
        <div className="w3-quarter">
          <img
            src="/images/iap-logo.png"
            alt="iap-logo"
            style={{ width: "100%" }}
          />
          <h3>Innovative A. Projects</h3>
          <p>What else?</p>
        </div>
        <div className="w3-quarter">
          <img
            src="/images/sharp-stylish.png"
            alt="sharp-stylish-logo"
            style={{ width: "100%" }}
          />
          <h3>Sharp Stylish</h3>
        </div>
      </div>

      <div className="w3-row-padding w3-padding-16 w3-center">
        <div className="w3-quarter">
          <img
            src="/images/glamour-salon.png"
            alt="glamour-salon"
            style={{ width: "100%" }}
          />
          <h3>Glamour Salon</h3>
        </div>
        <div className="w3-quarter">
          <img
            src="/images/bdc.png"
            alt="bdc-logo"
            style={{ width: "100%" }}
          />
          <h3>Building Dreams</h3>
        </div>
        <div className="w3-quarter">
          <img
            src="/images/ssc.png"
            alt="ssc-logo"
            style={{ width: "100%" }}
          />
          <h3>Solid Structures</h3>
        </div>
        <div className="w3-quarter">
          <img
            src="/images/buildwise-logo.png"
            alt="buildwise-logo"
            style={{ width: "100%" }}
          />
          <h3>Buildwise C.</h3>
        </div>
      </div>

      {/* <div className="w3-center w3-padding-32">
        <div className="w3-bar">
          <a href="#" className="w3-bar-item w3-button w3-hover-black">
            «
          </a>
          <a href="#" className="w3-bar-item w3-black w3-button">
            1
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hover-black">
            2
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hover-black">
            3
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hover-black">
            4
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hover-black">
            »
          </a>
        </div>
      </div> */}
    </>
  );
}

export default PhotoGrid;
