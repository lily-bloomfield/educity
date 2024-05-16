import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero container hero-container">
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.
        </p>
        <button className="btn">
          Explore more <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Hero;
