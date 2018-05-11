import React from "react";
import { Navbar, NavItem } from "react-materialize";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () =>
  <Navbar id="logo-navbar" brand="Shirley Ramirez" right>
    <div className="link-navbar">
      <NavItem>
        <Link to="/"> HOME </Link>
      </NavItem>
      <NavItem>
        <Link to="/About">ABOUT</Link>
      </NavItem>
      <NavItem>
        <Link to="/Portfolio">PORTFOLIO</Link>
      </NavItem>
      <NavItem>
        <Link to="/Contact">CONTACT ME</Link>
      </NavItem>
    </div>
  </Navbar>;


export default Nav;

