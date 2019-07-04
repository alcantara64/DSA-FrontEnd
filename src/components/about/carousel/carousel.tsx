import React, { Component } from "react";
import Slider from "react-slick";
import about_profile_pic from '../../../assets/images/about_profile_pic.png';
import './carousel.css';

class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      dotsClass: 'carousel-dot',
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
    return (
      <Slider {...settings}>

        <div className="row custom-testimonial-margin">
          <div className="custom-mid-page-slider-photo-column">
            <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />

          </div>


          <div className="custom-mid-page-slider-details-column purple-text-color">

            <div className="custom-link purple-text-color no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>

            <div className="custom-about-regular-h3 custom-margin">We were able to level set from across the business and technical folks, and then walk out of a 1.5 day engagement with a working prototype of a visualization with mock data.</div>


            <div className="custom-paragraph purple-text-color custom-nate-margin">Nate McIntire, C&D AND FTP VIZ LEAD</div>
          </div>

        </div>


        <div className="row custom-testimonial-margin">
          <div className="custom-mid-page-slider-photo-column">
            <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />

          </div>


          <div className="custom-mid-page-slider-details-column purple-text-color">

            <div className="custom-link purple-text-color no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>

            <div className="custom-about-regular-h3 custom-margin">We were able to level set from across the business and technical folks, and then walk out of a 1.5 day engagement with a working prototype of a visualization with mock data.</div>


            <div className="custom-paragraph purple-text-color custom-nate-margin">Nate McIntire, C&D AND FTP VIZ LEAD</div>
          </div>

        </div>


        <div className="row custom-testimonial-margin">
          <div className="custom-mid-page-slider-photo-column">
            <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />

          </div>


          <div className="custom-mid-page-slider-details-column purple-text-color">

            <div className="custom-link purple-text-color no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>

            <div className="custom-about-regular-h3 custom-margin">We were able to level set from across the business and technical folks, and then walk out of a 1.5 day engagement with a working prototype of a visualization with mock data.</div>


            <div className="custom-paragraph purple-text-color custom-nate-margin">Nate McIntire, C&D AND FTP VIZ LEAD</div>
          </div>

        </div>



        <div className="row custom-testimonial-margin">
          <div className="custom-mid-page-slider-photo-column">
            <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />

          </div>


          <div className="custom-mid-page-slider-details-column purple-text-color">

            <div className="custom-link purple-text-color no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>

            <div className="custom-about-regular-h3 custom-margin">We were able to level set from across the business and technical folks, and then walk out of a 1.5 day engagement with a working prototype of a visualization with mock data.</div>


            <div className="custom-paragraph purple-text-color custom-nate-margin">Nate McIntire, C&D AND FTP VIZ LEAD</div>
          </div>

        </div>
      </Slider>
    );
  }
}

export default Carousel