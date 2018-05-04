import React from "react";
import Nav from "../../components/Nav/Nav";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () =>
  <div>
    <Nav />
    <div className="slider-container">
      <SimpleSlider />
    </div>
    <Footer />
  </div>;

export default Home;
