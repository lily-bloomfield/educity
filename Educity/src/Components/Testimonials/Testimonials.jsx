import React, { useRef } from "react";
import Title from "../Title/Title";

import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

import "./Testimonials.css";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="container testimonials-container">
      <Title title="What Student Says" subTitle="TESTIMONIALS" />
      <div className="testimonials-container-2">
        <div className="icons">
          <i class="fa-solid fa-arrow-left" onClick={slideBackward}></i>
          <i class="fa-solid fa-arrow-right" onClick={slideForward}></i>
        </div>

        <div className="testimonials">
          <ul ref={slider}>
            <li>
              <div>
                <div className="user-info">
                  <img src={user1} />
                  <div>
                    <h3>Emily Williams</h3>
                    <p>Edusity, USA</p>
                  </div>
                </div>

                <br />
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div>
                <div className="user-info">
                  <img src={user2} />
                  <div>
                    <h3>William Jackson</h3>
                    <p>Edusity, USA</p>
                  </div>
                </div>

                <br />
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div>
                <div className="user-info">
                  <img src={user3} />
                  <div>
                    <h3>Emily Williams</h3>
                    <p>Edusity, USA</p>
                  </div>
                </div>

                <br />
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div>
                <div className="user-info">
                  <img src={user4} />
                  <div>
                    <h3>Will Jackson</h3>
                    <p>Edusity, USA</p>
                  </div>
                </div>

                <br />
                <p>
                  Choosing to pursue my degree at Edusity was one of the best
                  decisions I've ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
