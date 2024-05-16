import React from "react";
import "./Campus.css";
import Title from "../Title/Title";
import gallery1 from "../../assets/gallery-1.png";
import gallery2 from "../../assets/gallery-2.png";
import gallery3 from "../../assets/gallery-3.png";
import gallery4 from "../../assets/gallery-4.png";

const Campus = () => {
  return (
    <div className="container campus-container">
      <Title title="Campus Photos" subTitle="GALLERY" />
      <div className="campus-img-container">
        <img src={gallery1} />

        <img src={gallery2} />
        <img src={gallery3} />
        <img src={gallery4} />
      </div>
      <button className=" btn-campus">
        Explore more <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Campus;
