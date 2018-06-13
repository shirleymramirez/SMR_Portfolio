import React from "react";
import { Parallax } from "react-materialize";
import "./SimpleSlider.css";


const SimpleSlider = () =>
  <div>
    <Parallax
      className="image-size"
      imageSrc={require("../../images/winter.jpeg")}
      alt="winter"
    />
    <div className="section white">
      <div className="row container">
        <h2 className="header">About Me</h2>
        <p className="grey-text text-darken-3 lighten-3">
          A passionate Web Stack Developer who loves to code and do stuff
          related to coding. My motto is "Everything can be learned, coding may
          not be for everyone, but once you put your heart into it, everything
          is possible" It is like solving a puzzle and putting things one piece
          at a time.
        </p>
      </div>
    </div>
    <Parallax
      className="image-size"
      imageSrc={require("../../images/spiral.jpg")}
      alt="spring"
    />
    <div className="section white">
      <div className="row container">
        <p className="grey-text text-darken-3 lighten-3">
          A straight "A" student in coding bootcamp in University of Arizona. I
          could write clean, organized and well-written design code by using
          best software development practices.
        </p>
      </div>
    </div>
    <Parallax
      className="image-size"
      imageSrc={require("../../images/square.jpg")}
      alt="square"
    />
    <div className="section white">
      <div className="row container">
        <p className="grey-text text-darken-3 lighten-3">
          A motivated, results-oriented Full Stack Developer experienced in
          HTML, CSS, Javascript, Jquery, Bootstrap, NodeJs, HandleBars, Mysql,
          Express, Sequelize, MongoDB, ReactJS, Socket-io, Mocha, Chai,
          Material.io, and React Bootstap among other technical languages.
        </p>
      </div>
    </div>
    <Parallax
      className="image-size"
      imageSrc={require("../../images/summer.jpg")}
      alt="summer"
    />
    <div className="section white">
      <div className="row container">
        <p className="grey-text text-darken-3 lighten-3">
          Creative, problem-solving and have a can-do attitude with a sense of
          urgency to do what it takes to get things done. I find it exciting to
          develop and design code that reflects the provided architecture,
          design and content elements within the established frameworks,
          specifications and overall environment.
        </p>
      </div>
    </div>
    <Parallax
      className="image-size"
      imageSrc={require("../../images/spring.jpg")}
      alt="spring"
    />
    <div className="section white">
      <div className="row container">
        <p className="grey-text text-darken-3 lighten-3">
          Check out my Portfolio for some of the list of my project from bootstrap, node, jquery to full stack web application using M.E.R.N (Mongodb, Express, React and Node).
        </p>
      </div>
    </div>
  </div>;

export default SimpleSlider;

