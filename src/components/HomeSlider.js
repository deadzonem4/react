import React from "react";
import Slider from "react-slick";
import slide1 from '../images/slider/weather-slide-1.jpg';
import slide2 from '../images/slider/weather-slide-2.jpg';
import slide3 from '../images/slider/weather-slide-3.jpg';
import slide4 from '../images/slider/weather-slide-4.jpg';
import './HomeSlider.css';

class HomeSlider extends React.Component {
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
      <Slider {...settings} className="full-width-slider">
            <div className="slide">
                <img src={slide4} />
            </div>
            <div className="slide">
                <img src={slide1} />
            </div>
            <div className="slide">
                <img src={slide2} />
            </div>
            <div className="slide">
                <img src={slide3} />
            </div>
      </Slider>
    );
  }
}

export default HomeSlider;


// <section class="main-slider">
//                 <ul class="full-width-slider">
//                     <li class="slide">
//                         <img src="images/slider/weather-slide-4.jpg">
//                     </li>
//                     <li class="slide">
//                         <img src="images/slider/weather-slide-1.jpg">
//                     </li>
//                     <li class="slide">
//                         <img src="images/slider/weather-slide-2.jpg">
//                     </li>
//                     <li class="slide">
//                         <img src="images/slider/weather-slide-3.jpg">
//                     </li>
//                 </ul>
//                 <div class="slider-overlay">
//                     <h2>There is no such thing as bad weather, only different kinds of good weather.</h2>
//                     <p>Here you can find what will be your weather</p>
//                     <a id="toSearch" href="">Search</a>
//                     <div class="slider-arrows">
//                         <i class="fas fa-angle-double-down"></i>
//                     </div>
//                 </div>
//             </section>