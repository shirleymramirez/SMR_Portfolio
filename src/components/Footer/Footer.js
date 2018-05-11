import React from "react";
import "./Footer.css";

const Footer = () => {
      return <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
              © 2018 Copyright Shirley Ramirez
              <a className="grey-text text-lighten-4 right">
                <h6>Email me at:</h6>
                <a href="mailto:shirley.mramirez@yahoo.com?Subject=Hello%20Shirley" target="_top">
                  shirley.mramirez@yahoo.com
                </a>
              </a>
              <a className="grey-text text-lighten-4 right" href="https://www.linkedin.com/in/shirley-ramirez/" target="_blank" rel="noopener noreferrer">
                <i className="Small material-icons">
                  <img className="link-icon" src={require("../../images/linkedln.png")} alt="Linkedln-icon" />
                </i>
              </a>
              <a className="grey-text text-lighten-4 right" href="https://github.com/shirleymramirez" target="_blank" rel="noopener noreferrer">
                <i className="Small material-icons">
                  <img className="link-icon" src={require("../../images/github.png")} alt="Github-icon" />
                </i>
              </a>
            </div>
          </div>
        </footer>;
}

export default Footer;