import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () =>
  <nav>
    <div id="blue" className="block blue">
      <nav className="pushpin-demo-nav pinned" data-target="blue">
        <div className="nav-wrapper">
          <div className="container">
            <a className="brand-logo">Shirley Ramirez</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/About">ABOUT</Link>
              </li>
              <li>
                <Link to="/Portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <Link to="/Contact">CONTACT ME</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* <div className="divider" />
      <div className="row">
        <div className="col l12 m12 s12">
          <h1 className="center">HELLO, WORLD</h1>
        </div>
      </div>
    </div> */}


    {/* <div id="red" className="block red lighten-1">
      <nav className="pushpin-demo-nav pin-top" data-target="red">
        <div className="nav-wrapper">
          <div className="container">
            <a className="brand-logo">Shirley Ramirez</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/About">ABOUT</Link>
              </li>
              <li>
                <Link to="/Portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <Link to="/Contact">CONTACT ME</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div> */}

    {/* <div id="green" className="block green lighten-1">
      <nav className="pushpin-demo-nav pin-top" data-target="green">
        <div className="nav-wrapper">
          <div className="container">
            <a className="brand-logo">Shirley Ramirez</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/About">ABOUT</Link>
              </li>
              <li>
                <Link to="/Portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <Link to="/Contact">CONTACT ME</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div> */}

  </div>

  </nav>;

export default Nav;

