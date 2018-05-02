import React from "react";
import "./Nav.css";

const Nav = () =>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">
        Shirley Ramirez
      </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="Home.html">HOME</a>
        </li>
        <li>
          <a href="About.html">ABOUT</a>
        </li>
        <li>
          <a href="Portfolio.html">PORTFOLIO</a>
        </li>
        <li>
          <a href="Contact.html">CONTACT ME</a>
        </li>
      </ul>
    </div>
  </nav>;

export default Nav;

