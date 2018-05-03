import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () =>
  <nav>
    <div className="nav-wrapper">
      <a className="brand-logo">
        Shirley Ramirez
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/About">ABOUT</Link></li>
        <li><Link to="/Portfolio">PORTFOLIO</Link></li>
        <li><Link to="/Contact">CONTACT ME</Link></li>
      </ul>
    </div>
  </nav>;

export default Nav;

