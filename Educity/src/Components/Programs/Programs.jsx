import React from "react";
import "./Programs.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import programIcon1 from "../../assets/program-icon-1.png";
import programIcon2 from "../../assets/program-icon-2.png";
import programIcon3 from "../../assets/program-icon-3.png";
import Title from "../Title/Title";
const Programs = () => {
  return (
    <div className="container program-container">
      <Title title="What We Offer" subTitle="Our Programs" />
      <div className="programs-container">
        <div className="program">
          <img src={program1} className="programImg" />
          <div className="program-info">
            <img src={programIcon1} />
            Bachelor Degree
          </div>
        </div>
        <div className="program">
          <img src={program2} className="programImg" />
          <div className="program-info">
            <img src={programIcon2} />
            Bachelor Degree
          </div>
        </div>
        <div className="program">
          <img src={program3} className="programImg" />
          <div className="program-info">
            <img src={programIcon3} />
            Bachelor Degree
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
