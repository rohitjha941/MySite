import React, { Component } from "react";
import "./header.scss";
import { NavLink as Link } from "react-router-dom";

export default class Header extends Component {
  // componentDidMount() {
  //   if (window.innerWidth >= 900) {
  //     window.onscroll = function() {
  //       if (window.pageYOffset === 0) {
  //         document.getElementById("heade").classList.remove("scroll");
  //       } else {
  //         document.getElementById("heade").classList.add("scroll");
  //       }
  //     };
  //   }
  // }
  render() {
    return (
      <div id="heade" className="nav">
        <span className="nav_brand">
          <Link
            to="/"
            className="nav_items"
            activeClassName="nav_array_active"
            exact={true}
          >
            Rohit Jha
          </Link>
        </span>

        <span className="nav_array">
          <Link
            activeClassName="nav_array_active"
            to="/projects"
            className="nav_items"
          >
            Projects
          </Link>

          <a
            class="nav_items nav_margin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/open?id=1H0uQjfwfwHboeyjpuuSHYBV3uM8bWoXd"
          >
            Résumé
          </a>

          <Link
            activeClassName="nav_array_active"
            to="/about"
            className="nav_items nav_margin"
          >
            About
          </Link>
        </span>
      </div>
    );
  }
}
