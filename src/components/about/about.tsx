import React from 'react';
import Auxi from '../../hoc/Auxi';
import './about.css';

const about = () => {
return (
    <Auxi>
        <div className="custom-about-height">
            
        <div className="em-u-text-align-left custom-header-margin-left">
        <div className="custom-H1">Data powers everything we do.</div>
        <div className="custom-paragraph custom-paragraph-width">We accelerate high-value, actionable insights through the delivery of scalable, enterprise data platforms, data science and analytics solutions.</div>
        </div>

        <div className=" em-l em-l--two-column-wide">
  <div className="em-l__main">

            <div className="em-l-grid custom-header-margin-left em-l-grid--1-2-1 em-l-grid--break-fast">
            <div className="em-l-grid__item">
                
        <div className="custom-H3">Who are we?</div>
        
        <div className="custom-paragraph">This website is sponsored by Data Science and Analytics within EMIT. We work to define and maintain data stadards,
        collaborate with other influencers in the data and analytics space, and drive change for the better in your day-to-day work.
        </div>
            </div>
            <div className="em-l-grid__item">
                <div className="fpo-block fpo-block--dark">2</div>
            </div>
            </div>

  </div>
  <div className="em-l__secondary">
    <div className="fpo-block">Secondary</div>
  </div>
</div>


        </div>

    </Auxi>
)
}

export default about;