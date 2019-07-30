import React from 'react';
import './recommendation.css';
import dropdown from '../../assets/images/dropdown.png';
import one from '../../assets/images/one.png';
import number_2 from '../../assets/images/number_2.png';
import number2_profile from '../../assets/images/number2_profile.png';
import timer from '../../assets/images/timer.png';
import calender_img from '../../assets/images/calender_img.png'
import location_icon from '../../assets/images/location_icon.png'

import like_button from '../../assets/images/like_button.png';
import share from '../../assets/images/share.png';
import icon_spinner from '../../assets/images/icon_spinner.svg';



const recommendation = () => {
    return (
    
<div className="recommendation-container">
                <div className="custom-H1">Here are your options.</div>
                <div className="flex-container-here">
                <div className="custom-paragraph custom-margin-here">I want to <span className="custom-link">find data to use</span> <img className="custom-dropdown-style" src={dropdown} alt=""/> , specially <span  className="custom-link">find datasets and dashboards. <img className="custom-dropdown-style-right" src={dropdown} alt=""/></span>  I'm in <span  className="custom-link">Upstream <img className="custom-dropdown-style-right" src={dropdown} alt=""/></span> .</div>
                </div>
                <div className="custom-flex-number">
                    <div className="custom-flex-basis">
                        <img className="custom-img-height" src={one} alt=""/>
                    </div>
                    <div className="">
                     <div className= "custom-margin-goto custom-link">Goto/DataDash</div>
                     <img className="custom-share-image" src={share} alt=""/>
                    </div>

                
                </div>
                <div className="custom-datadash custom-paragraph">DataDash is a corporate data catalog tool that allows you to search and find datasets and dashboards across the corporation. 
                     You can explore recently added datasets, customize your business line you search within, gain access to How To's and success stories, and more.
                </div>
                <div className="custom-number2-flex">   
                    <div className="custom-number2-flexbasis">
                        <img className="custom-number2" src={number_2} alt=""/></div>      
                           <div className= "custom-paragraph">
                    Reach out to these contacts for guidance:
                </div>
                </div>
                <div className="custom-div-margin">
                <div className="custom-number2-flex">
                    <div className="custom-number2-flexbasis"><img className=" custom-image2-size" src={number2_profile} alt=""/></div>
                    <div className= "custom-margin-ali custom-ali">Ali Wilkin</div>

                </div>

                <div className="custom-ali-margin">
                <div className= "custom-margin-gsc custom-paragraph">GSC EMIT DATA SC&AN STGY&SVC MGIT</div>
                <div className= "custom-margin-houston custom-paragraph">Houston</div>
                <div className= "custom-margin-connect custom-paragraph">Ali can connect you with the people you need to talk to.</div>
                <div className="custom-link custom-margin-email">Email, IM, or Skype Call</div>
                </div>
                </div>

<div>
    <div className="custom-paragraph">
    Check out some of these resources:
    </div>
                <div className="em-l-grid em-l-grid--3up ">
  <div className="active-card em-l-grid__item custom-tile-area">
    <div className="fpo-block custom-tile-inner">
        <div className="custom-dispaly">
        <div className="custom-paragraph">
            VIDEO
        </div>
        <div>
           <img className="custom-like-bottom" src={like_button} alt=""/>
        </div>
        </div>
        <div className="custom-H3 custom-header">Data design & Storytelling for Humans</div>
        <div className="custom-paragraph">
        You have your data, but what are you trying to say with it? Develop the skills to design compelling visualizations and iterate through a dashboard. See some fun examples and practical tips.
        </div>
        <div><img className="custom-timer" src={timer} alt=""/></div>

    </div>
  </div>
  <div className="active-card em-l-grid__item custom-tile-area">
    <div className="fpo-block fpo-block--dark">
    <div className="fpo-block custom-tile-inner">
    <div className="custom-dispaly">

        <div className="custom-paragraph">
            POWERPOINT
        </div>
        <div>
           <img className="custom-like-bottom" src={like_button} alt=""/>
        </div>
        </div>
        <div className="custom-H3 custom-header">Introduction to Tableau</div>
        <div className="custom-paragraph">
        Ready to start leveraging Tableau at ExxonMobil? This material provides a quick overview and links to additional resources to get you started.        </div>
    <div><img className="custom-timer" src={timer} alt=""/></div>
    </div>
    </div>
  </div>
  <div className="active-card em-l-grid__item custom-tile-area">
    <div className="fpo-block">
    <div className="fpo-block custom-tile-inner">
    <div className="custom-dispaly">

        <div className="custom-paragraph">
        INTERNAL WEBSITE
        </div>
        <div>
           <img className="custom-like-bottom" src={like_button} alt=""/>
        </div>
        </div>
        <div className="custom-H3 custom-header">The Academy</div>
        <div className="custom-paragraph">
        
        Data and analytics courses at your fingertips - so you can learn on your own time and at your own pace.    </div>
        <div className="custom-timer"><img src={timer} alt=""/></div>

    </div>
    </div>
  </div>
 
</div>

    </div>
    <div>
        <div className="custom-paragraph">
            These are the related meetups that are related to this topic. Check them out if they're in your areas: 
        </div>
        
<div className="em-l-grid em-l-grid--3up ">
<div className="active-card-second em-l-grid__item custom-tile-area">
    <div className="fpo-block custom-tile-inner">
        <div className="custom-dispaly">
        
       
        </div>
        <div className="custom-H3 custom-header">Azure Power Lunches</div>
        <div className="custom-paragraph">
        The Cloud team hosts a 30 minute virual session every Friday at 11 AM CT to learn how to utilize the power of Azure and build next generation applications.
        </div>
<div className="custom-flex">
    <div>
        <img className="custom-calender-icon" src={calender_img} alt=""/>
    </div>
    <div className="custom-paragraph custom-date-padding">
    Fridays @ 11 AM CT
    </div>
</div>
<div className=" custom-flex-location">
    <div>
        <img className="custom-location-icon" src={location_icon} alt=""/>
    </div>
    <div className="custom-paragraph custom-location-padding">
    Microsoft Teams Meeting (virtual)    </div>
</div>
<div className="custom-eventx custom-link">
GO TO EVENTX
</div>
    </div>
  </div>
 
 
</div>
<div className="custom-flex-location">
<div className="custom-link">
    GO TO EVENTX TO SEE MORE EVENTS 
</div>
<div>
    <img className="custom-goto" src={share} alt=""/>
</div>
</div>
    </div>

    <div className="custom-text-align">
        <div>Thanks!</div>
        <div>
            We're getting you personalized results.
        </div>
        <div>One momemt please...</div>
        <img src={icon_spinner} alt=""/>
    </div>

                </div> 
    )   
}   
export default recommendation;