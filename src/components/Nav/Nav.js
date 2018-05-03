import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () =>
  <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">
        Shirley Ramirez
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a><Link to="/">HOME</Link></a></li>
        <li><a><Link to="/About">ABOUT</Link></a></li>
        <li><a><Link to="/Portfolio">PORTFOLIO</Link></a></li>
        <li><a><Link to="/Contact">CONTACT ME</Link></a></li>
      </ul>
    </div>
  </nav>;

export default Nav;

