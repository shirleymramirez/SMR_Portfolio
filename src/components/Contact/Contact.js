import React from "react";
import "./Contact.css";

const Contact = () =>
  <div className="container">
    <div className="row">
      <div className="connect-me">
        <h4 className="connect-me-at">Connect with me at: </h4>
        <div>
          <a href="mailto:shirley.mramirez@yahoo.com?Subject=Hello%20Shirley" target="_top">
            shirley.mramirez@yahoo.com
          </a>
        </div>
        <div>
          <a
            className="grey-text text-lighten-4 center"
            href="https://www.linkedin.com/in/shirley-ramirez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="Small material-icons">
              <img
                className="link-icon"
                src={require("../../images/linkedln.png")}
                alt="Linkedln-icon"
              />
            </i>
          </a>
          <a
            className="grey-text text-lighten-4 center"
            href="https://github.com/shirleymramirez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="Small material-icons">
              <img
                className="link-icon"
                src={require("../../images/github.png")}
                alt="Github-icon"
              />
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>;

export default Contact;
