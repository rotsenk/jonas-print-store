import React from "react";

function About() {
  return (
    <div className="w3-container w3-padding-32 w3-center">
      <h3>About Jonas Print</h3>
      <br />
      <img
        src="/cover.jpg"
        alt="About Jonas Print Cover"
        className="w3-image"
        style={{ display: "block", margin: "auto" }}
        width="900"
        height="633"
      />
      <div className="w3-padding-32">
        <h4>
          <b>Join us and discover how we can help take your business to the next level!</b>
        </h4>
        <h6>
          <i>Facilitate the design and ordering of promotional materials through an intuitive online store.</i>
        </h6>
        <p>
          Jonas Print is an innovative online store designed to offer our
          customers an easy and accessible way to design and order various
          promotional materials. Our primary goal is to provide an intuitive
          tool that allows users to create high-quality personalized products,
          whether using their own designs or choosing from our pre-designed
          templates.
        </p>
      </div>
    </div>
  );
}

export default About;
