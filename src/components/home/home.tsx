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
                            <div className="learning-header">Learning</div>
                            <div className="learning-header-one"></div>
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
                            <div className="learning-header">a.Community</div>
                            <div className="learning-header-border"></div>
                            <div className="learning-content">Find the tutorials, and walkthroughs that you need to power your workflow</div>
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
                            <div className="learning-header">Find Solutions</div>
                            <div className="learning-header-border"></div>
                            <div className="learning-content">Find the tutorials, and walkthroughs that you need to power your workflow</div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
        </Auxi>
    )
}

export default home