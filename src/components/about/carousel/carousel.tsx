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
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <Slider {...settings}>

        <div className="row custom-testimonial-margin">
          <div className="custom-mid-page-slider-photo-column">
            <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />

          </div>


          <div className="custom-mid-page-slider-details-column purple-text-color">

            <div className="custom-link no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>

            <div className="custom-about-regular-h3 custom-margin">The academy is a place to learn all things Data and Analytics including courses and other resources like people and conferences. And helps to educate and increase competency across the company and learn topics related to data and analytics</div>


            <div className="custom-paragraph purple-text-color custom-nate-margin">Anna Brost, FTP, GSC CONT FIN SYS ROBOTICS PROC AUT</div>
          </div>

        </div>


        <div className="row custom-testimonial-margin">
          <div className="custom-mid-page-slider-photo-column">
            <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />

          </div>


          <div className="custom-mid-page-slider-details-column purple-text-color">

            <div className="custom-link  no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>

            <div className="custom-about-regular-h3 custom-margin">We were able to level set from across the business and technical folks, and then walk out of a 1.5 day engagement with a working prototype of a visualization with mock data.</div>


            <div className="custom-paragraph purple-text-color custom-nate-margin">Nate McIntire, C&D AND FTP VIZ LEAD</div>
          </div>

        </div>


        <div className="row custom-testimonial-margin">
          <div className="custom-mid-page-slider-photo-column">
            <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />

          </div>


          <div className="custom-mid-page-slider-details-column purple-text-color">

            <div className="custom-link  no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>

            <div className="custom-about-regular-h3 custom-margin">We were able to level set from This design thinking workshop with data is a lot of progress and an impressive team.</div>


            <div className="custom-paragraph purple-text-color custom-nate-margin">Nick Smith, MS-BMR</div>
          </div>

        </div>



        <div className="row custom-testimonial-margin">
          <div className="custom-mid-page-slider-photo-column">
            <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />

          </div>


          <div className="custom-mid-page-slider-details-column purple-text-color">

            <div className="custom-link no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>

            <div className="custom-about-regular-h3 custom-margin">We can save a lot of time just making a few small changes through data and analytics in this process.</div>


            <div className="custom-paragraph purple-text-color custom-nate-margin">Jeremy Janicki, FTP</div>
          </div>

        </div>
      </Slider>
    );
  }
}

export default Carousel