import React from 'react';
import Auxi from '../../hoc/Auxi';
import './about.css';
import Footer from '../app-footer/footer';

const about = () => {
return (
    <Auxi>
        <div className="custom-about-height">
            
        <div className="em-u-text-align-left custom-header-margin-left custom-line-spacing">
        <div className="custom-H1">Data powers everything we do.</div>
        <div className="custom-paragraph custom-paragraph-width">We accelerate high-value, actionable insights through the delivery of scalable, enterprise data platforms, data science and analytics solutions.</div>
        </div>

        <div className="em-u-text-align-left em-l em-l--two-column-wide custom-line-spacing">
  <div className="em-l__main">

            <div className="em-l-grid custom-paragraph-margin em-l-grid--1-2-1 em-l-grid--break-fast">
            <div className="em-l-grid__item">
                
        <div className="custom-H3">Who are we?</div>
        
        <div className="custom-paragraph">This website is sponsored by Data Science and Analytics within EMIT. We work to define and maintain data stadards,
        collaborate with other influencers in the data and analytics space, and drive change for the better in your day-to-day work.
        </div>

            </div>
            <div className="em-l-grid__item">
                

            <div className="custom-H3">Who can we do for you?</div>
        
        <div className="custom-paragraph">We accelerate high-value, actionable insights through the delivery of scalable, enterprise data platforms, data science and analytics solutions.
        </div>

        
        
        <div className="row custom-line-spacing">
            <div className="column em-u-margin-left-none">
                <div className="custom-paragraph">
                    We were able to level set from across the business and technical folks, and then walk out of a day and a half engagement
                    with a working prototype of a visualization with mock data
            </div>
            <div className="custom-paragraph custom-line-spacing">
                <span className="custom-paragraph text-underline">Nate McIntire, C&D AND FTP VIZ LEAD</span>
            </div>


            </div>
            <div className="column">
                <div className="custom-paragraph">
                    This design thinking workshop with data makes alot of progress and is an impressive team.
            </div>
            <div className="custom-paragraph custom-line-spacing">
                <span className="custom-paragraph text-underline">Nick Smith, MS-BMR</span>
            </div>
            </div>
            
            <div className="column">
                <div className="custom-paragraph">
We can save alot of time just making a few small changes 
            </div>
            <div className="custom-paragraph custom-line-spacing">
                <span className="custom-paragraph text-underline">Nick Smith, MS-BMR</span>
            </div>


            </div>
            <div className="column">
</div>
<div className="column">
3
</div>
        </div>


            </div>
            </div>

  </div>
  <div className="em-l__secondary">
    <div className="fpo-block">Secondary</div>
  </div>
</div>

        </div>


        <Footer />
    </Auxi>
)
}

export default about;