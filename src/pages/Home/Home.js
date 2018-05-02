import React from "react";
import "./Home.css";

const Home = () =>
  <div class="container">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
        <li data-target="#myCarousel" data-slide-to="3" />
      </ol>

      <div class="carousel-inner">
        <div class="item active">
          <img src="../../images/winter.jpeg" alt="Winter" />
          <div class="carousel-caption">
            <h3 className="carousel-font">Los Angeles</h3>
                <p>LA is always so much fun!</p>
          </div>
        </div>

        <div class="item">
          <img src="../../images/spring.jpg" alt="Spring" />
        </div>

        <div class="item">
          <img src="../../images/summer.jpg" alt="Summer" />
        </div>

        <div class="item">
          <img src="../../images/fall.jpeg" alt="Fall" />
        </div>
      </div>

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" />
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" />
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>;

export default Home;
