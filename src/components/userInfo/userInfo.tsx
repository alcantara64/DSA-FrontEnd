import React from 'react';
import user_profile from './../../assets/images/user_profile.png';
import add_tag from './../../assets/images/add_tag.png';
import Auxi from '../../hoc/Auxi';

import Footer from '../app-footer/footer';


import './userInfo.css';


const userInfo = (props:any) => {
    return (
        <Auxi className="">
        <div className="custom-user-container">
            <div><img className="custom-user-image" src={user_profile} alt="" /> </div>
            <div className="custom-welcome-margin custom-H2">Welcome, {props.displayName}</div>
            <div className="custom-interest-margin custom-text-size">Interests</div>
            <div className="custom-paragraph">
            We’ll use your choices to recommend different courses and resources to you.
            </div>  
            <div className=" dashboard-btn-container  "> 
            <button className="user-button dashboard-btn">Python</button>    
            
            <button className="user-button dashboard-btn ">Machine Learning</button>   
            
            <button className="user-button dashboard-btn">Artificial Intelligence</button>  
            
            <button className="user-button dashboard-btn">Data at ExxonMobil</button>   
           
            <button className="user-button dashboard-btn">Artificial Intelligence</button>   
            
            <button className="user-button dashboard-btn">Python</button>   
           
            <button className="user-button dashboard-btn">Machine Learning</button>  
            </div> 
<div className="custom-add-tag">
    <img src={add_tag} alt=""/>
    <div className="custom-tag-margin custom-link">ADD TAGS</div>
</div>



        </div>
        <div className="footer-divider"></div>
                <Footer />
                </Auxi>

    )
}

export default userInfo;