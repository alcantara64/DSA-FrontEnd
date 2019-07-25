import React from 'react';
import user_profile from './../../assets/images/user_profile.png';
import add_tag from './../../assets/images/add_tag.png';
import Auxi from '../../hoc/Auxi';

import Footer from '../app-footer/footer';


import './userInfo.css';


const userInfo = () => {
    return (
        <Auxi className="">
        <div className="custom-user-container">
            <div><img className="custom-user-image" src={user_profile} alt="" /> </div>
            <div className="custom-welcome-margin custom-H2">Welcome, Jennifer</div>
            <div className="custom-interest-margin custom-text-size">Interests</div>
            <div className="custom-paragraph">
            We’ll use your choices to recommend different courses and resources to you.
            </div>  
            <div> 
            <button>Python</button>    </div>  
            <div>
            <button>Machine Learning</button>   </div>
            <div>
            <button>Artificial Intelligence</button>   </div>
            <div>
            <button>Data at ExxonMobil</button>   </div>
            <div>
            <button>Python</button>   </div>
            <div>
            <button>Python</button>   </div>
            <div>
            <button>Python</button>  
            </div> 
<div className="custom-add-tag">
    <img src={add_tag} alt=""/>
    <div className="custom-tag-margin custom-link">ADD TAGS</div>
</div>



        </div>
                <Footer />
                </Auxi>

    )
}

export default userInfo;