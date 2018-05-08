import React from "react";
import "./Contact.css";

const Contact = () =>
  <div className="container">
    <div className="row">
      <div className="connect-me">
        <h4 className="connect-me-at">Connect with me at: </h4>
        <a
          href="mailto:shirley.mramirez@yahoo.com?Subject=Hello%20Shirley"
          target="_top"
        >
          shirley.mramirez@yahoo.com
        </a>
      </div>
    </div>
  </div>;

export default Contact;
