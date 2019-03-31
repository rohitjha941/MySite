import React, { Component } from "react";
import "./header.scss";
import { Link } from "react-scroll";
import Home from "../home/home";
import Projects from "../projects/project";
import Contact from "../contact/contact";
import About from "../about/about";

export default class Header extends Component {
  componentDidMount() {
    if (window.innerWidth >= 900) {
      window.onscroll = function() {
        if (window.pageYOffset === 0) {
          document.getElementById("heade").classList.remove("scroll");
        } else {
          document.getElementById("heade").classList.add("scroll");
        }
      };
    }
  }
  render() {
    return (
      <>
        <div id="heade" className="nav">
          <span className="nav_brand">
            <Link
                
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              Rohit Jha
            </Link>
          </span>

          <span className="nav_array">
            <Link
              activeClass="nav_array_active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              Home
            </Link>

            <Link
              activeClass="nav_array_active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              About
            </Link>

            <Link
              activeClass="nav_array_active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              Projects
            </Link>

            <Link
              activeClass="nav_array_active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              Contact
            </Link>
          </span>
        </div>

        <Home />
        <About />
        <Projects />
        <Contact />
      </>
    );
  }
}
