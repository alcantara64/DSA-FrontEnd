import React from 'react';
import Auxi from '../../hoc/Auxi';
import Learn_Illustration from './../../asset/images/Learn_Illustration.png';
import Community_Illustration from './../../asset/images/a.Community_Illustration.png';
import Find_Solutions_Illustration from './../../asset/images/Find_Solutions_Illustration.png'
import './home.css';

const home = () => {
    return (
        <Auxi>
                <div className="em-l-grid em-l-grid--1-to-3up ">
                    <div className="em-l-grid__item">
                        <div className="fpo-block">
                            <div className="grid-1">
                            <div className="body-header">Data at ExxonMobil</div>
                            <div className="comming-soon">
                                <a href="">
                                    <img src={Learn_Illustration} alt="learn"/>
                                </a>
                            </div>
                            <div className="write-up-container">
                            <div className="learning-header underline-learn">Learning</div>
                            <div className="learning-content">Find the tutorials, and walkthroughs that you need to power your workflow</div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="em-l-grid__item">

                        <div className="fpo-block fpo-block--dark">
                            <div className="grid-2">
                            <div className="body-header"></div>
                            <div className="comming-soon">
                                <a href="">
                                    <img src={Community_Illustration} alt="learn"/>
                                </a>
                            </div>
                            <div className="write-up-container">
                            <div className="learning-header underline-community">a.Community</div>
                            <div className="learning-content">Connect with the ExxonMobil data community. Find meetups, training, and other global and related communities.</div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="em-l-grid__item">

                        <div className="fpo-block">
                            <div className="grid-3">
                                <div className="body-header-data__container">
                                    <div className="body-header-data__marker"></div>
                                <div className="body-header-data">
                                    Find data standards, collaborate with influencers, and drive change through our community
                                </div>
                                </div>
                                <div className="comming-soon">
                                <a href="">
                                    <img src={Find_Solutions_Illustration} alt="learn"/>
                                </a>
                            </div>
                            <div className="write-up-container">
                            <div className="learning-header underline-solution">Find Solutions</div>
                            <div className="learning-content">Lets's direct you to the tool, tutorial, or person that will get you what you need through our services portal.</div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
        </Auxi>
    )
}

export default home