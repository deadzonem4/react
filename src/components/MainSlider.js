import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import slide1 from '../images/slider/weather-slide-1.jpg';
import slide2 from '../images/slider/weather-slide-2.jpg';
import slide3 from '../images/slider/weather-slide-3.jpg';
import slide4 from '../images/slider/weather-slide-4.jpg';
import arrow from '../images/two-arrow.png';
import './MainSlider.css';

class MainSlider extends React.Component {
  render() {
    var settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 400,
      fade: true,
      cssEase: 'linear'
    };
    return (
      <div className="main-slider">
        <Slider {...settings} className="full-width-slider">
          <div className="slide">
            <img src={slide4} alt={slide4}/>
          </div>
          <div className="slide">
            <img src={slide1} alt={slide1}/>
          </div>
          <div className="slide">
            <img src={slide2} alt={slide2}/>
          </div>
          <div className="slide">
            <img src={slide3} alt={slide3}/>
          </div>
        </Slider>
        <div className="slider-overlay">
          <h2>There is no such thing as bad weather, only different kinds of good weather.</h2>
          <p>Here you can find what will be your weather</p>
          <Link id="toSearch" to="/weather">{this.props.search}</Link>
          <div className="slider-arrows">
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    );
  }
}

export default MainSlider;

