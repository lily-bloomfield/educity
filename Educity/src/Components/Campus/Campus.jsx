import React from "react";
import "./Campus.css";
import Title from "../Title/Title";
import gallery1 from "../../assets/campus-1.jpg";
import gallery2 from "../../assets/campus-2.webp";
import gallery3 from "../../assets/campus-3.jpg";
import gallery4 from "../../assets/campus-4.webp";

const Campus = () => {
  return (
    <div className="container campus-container">
      <Title title="Campus Photos" subTitle="GALLERY" />
      <div className="campus-img-container">
        <div className="img-div">
          <img src={gallery1} />
        </div>
        <div className="img-div">
          <img src={gallery2} />
        </div>
        <div className="img-div">
          <img src={gallery3} />
        </div>
        <div className="img-div">
          <img src={gallery4} />
        </div>
      </div>
      <button className=" btn-campus">
        Explore more <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Campus;
