import React, { Component } from "react";
import "./Contact.css";
import { Row, Col } from "react-materialize";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Row className="contact-grid">
          <Col s={6}>
            <h2>Shirley Ramirez</h2>
            <img
              src="https://avatars1.githubusercontent.com/u/31137669?s=400&u=a9854848def8b55ae0aaf781dacfb1253ef64909&v=4"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ widows: "75%", margin: "auto", paddingTop: "1em" }}>
              A web developer specializes in React, Javascript, HTML, CSS,
              Bootstrap, jQuery, React-redux to name a few.
            </p>
          </Col>
          <Col s={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list" style={{ textAlign: "left" }}>
              <ul>
                <li
                  style={{
                    fontSize: "30px",
                    fontFamily: "Anton"
                  }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  480-310-9197
                </li>

                <li
                  style={{
                    fontSize: "30px",
                    fontFamily: "Anton"
                  }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  shirley.mramirez@yahoo.com
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;

// const Contact = () =>
//   <div className="container">
//     <div className="row">
//       <div className="connect-me">
//         <h4 className="connect-me-at">Connect with me at: </h4>
//         <div>
//           <a href="mailto:shirley.mramirez@yahoo.com?Subject=Hello%20Shirley" target="_top">
//             shirley.mramirez@yahoo.com
//           </a>
//         </div>
//         <div>
//           <a
//             className="grey-text text-lighten-4 center"
//             href="https://www.linkedin.com/in/shirley-ramirez/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="Small material-icons">
//               <img
//                 className="link-icon"
//                 src={require("../../images/linkedln.png")}
//                 alt="Linkedln-icon"
//               />
//             </i>
//           </a>
//           <a
//             className="grey-text text-lighten-4 center"
//             href="https://github.com/shirleymramirez"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="Small material-icons">
//               <img
//                 className="link-icon"
//                 src={require("../../images/github.png")}
//                 alt="Github-icon"
//               />
//             </i>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>;

// export default Contact;
