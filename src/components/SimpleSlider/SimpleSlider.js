import React from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}



class SimpleSlider extends React.Component {
  render() {
    var settings = { 
      dots: true, 
      infinite: true, 
      speed: 500, 
      slidesToShow: 1, 
      slidesToScroll: 1,
      accessibility: true, 
      // nextArrow: <SampleNextArrow />, 
      prevArrow: <SamplePrevArrow />, 
      // autoplay: true 
    };
    
    return <div>
        <Slider {...settings} className="carousel-container">
          <div className="carousel-image">
            <img src={require("../../images/square.jpg")} alt="winter" />
          </div>
          <div className="carousel-image">
            <img src={require("../../images/spiral.jpg")} alt="spring" />
          </div>
          <div className="carousel-image">
            <img src={require("../../images/summer.jpg")} alt="summer" />
          </div>
          <div className="carousel-image">
            <img src={require("../../images/winter.jpeg")} alt="fall" />
          </div>
          <div className="carousel-image">
            <img src={require("../../images/bubbles.jpg")} alt="summer" />
          </div>
          <div className="carousel-image">
            <img src={require("../../images/spiral.jpg")} alt="fall" />
          </div>
          <div className="carousel-image">
            <img src={require("../../images/square.jpg")} alt="summer" />
          </div>
        </Slider>
      </div>;
  }
}

export default SimpleSlider;