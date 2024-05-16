import "./About.css";

import React from "react";
import about from "../../assets/about.png";
import Title from "../Title/Title";
import play from "../../assets/play-icon.png";
const About = () => {
  return (
    <div className="container about-container">
      <div className="img-container">
        <i class="fa-solid fa-circle-play"></i>
        <img src={about} />
      </div>
      <div className="about-info">
        <div className="about-title">
          <p>ABOUT UNIVERSITY</p>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
        </div>
        <p className="about-p">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education.
          <br />
          <br />
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
          <br />
          <br />
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
