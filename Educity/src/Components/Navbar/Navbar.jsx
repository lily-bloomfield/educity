import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="container">
      {/* <img src={logo} className="logo" /> */}
      <h2>
        <i class="fa-solid fa-graduation-cap"></i>Educity
      </h2>
      <ul>
        <li>
          <Link
            activeClass="active"
            to="hero-container"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="program-container"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Programs
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about-container"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="campus-container"
            spy={true}
            smooth={true}
            offset={-40}
            duration={500}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="testimonials-container"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact-container"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            <button className="btn">Contact us</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
