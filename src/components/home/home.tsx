import React from 'react';
import Auxi from '../../hoc/Auxi';
import Learn_Illustration from './../../asset/images/Learn_Illustration.png';
import Community_Illustration from './../../asset/images/a.Community_Illustration.png';
import Find_Solutions_Illustration from './../../asset/images/Find_Solutions_Illustration.png';
import lady_circle from './../../asset/images/lady_circle.png';
import arif_wahid from './../../asset/images/arif-wahid.png';
import path_2 from './../../asset/images/Path_2.png';
import rectangle from './../../asset/images/Rectangle.png';
import nasa from './../../asset/images/nasa.png';
import linkedin from './../../asset/images/linkedin.png';
import oval from './../../asset/images/Oval.png';
import combined_shape from './../../asset/images/Combined_Shape.png';
import ian_espinosa from './../../asset/images/ian-espinosa.png';
import fill_219 from './../../asset/images/Fill_291.png';
import oval_1 from './../../asset/images/Oval_1.png';
import './home.css';
import Footer from '../app-footer/footer';

const home = () => {
    return (
        <Auxi className="">
                <div className="em-l-grid em-l-grid--1-to-3up ">
                    <div className="em-l-grid__item">
                        <div className="fpo-block">
                            <div className="grid-1">
                            <div className="custom-H1 body-header">Data at ExxonMobil</div>
                            <div >
                                <a href="../../container/Dashboard/dashboard.tsx">
                                    <img className="" src={Learn_Illustration} alt="learn"/>
                                </a>
                            </div>
                            <div className=" custom-H2 coming-soon">Coming Soon</div>
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
                            <div >
                                <a href="../../container/Dashboard/dashboard.tsx">
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
                                <div >
                                <a href="../../container/Dashboard/dashboard.tsx">
                                    <img className="find-solutions"src={Find_Solutions_Illustration} alt="learn"/>
                                </a>
                            </div>
                            <div className="write-up-container solution">
                            <div className="learning-header underline-solution">Find Solutions</div>
                            <div className="learning-content">Lets's direct you to the tool, tutorial, or person that will get you what you need through our services portal.</div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                <div className=" middle-section">
                    <div className="custom-H2 ">Want to see what we've done for others?</div>
                    <div className="custom-paragraph success-stories">Check out the success stories from our teams and teams we've worked with in the past</div>
                    <div>
                    <button className="em-c-btn em-c-btn--large custom-btn ">
                        <span className="em-c-btn__text custom-paragraph">See other Success Stories</span>
                    </button>
                    </div>
                </div>

            <div className=" about-dsa">
                
                
                <div className="em-l-grid em-l-grid--2up ">
                <div className="em-l-grid__item first">
                    <div className="fpo-block">
                        <div >
                            <div className="about-header custom-H2">
                                DS&A is the data hub of ExxonMobil.
                            </div>
                            <div className="about-body custom-paragraph">
                                Learn more about is here.
                            </div>
                        </div>
                        <div className="about-container">
                        <button className="em-c-btn em-c-btn--large large">
                        <span className="em-c-btn__text custom-H2 btn-text">About DS&A</span>
                        </button>
                        </div>
                    </div>
                </div>
                <div className="em-l-grid__item second">
                    <div className="fpo-block fpo-block--dark">
                        <div className="about-img-container">
                            <img src={arif_wahid} alt="" className="arif-waheed"/>
                            <img src={lady_circle} alt="" className="lady-circle"/>
                            <img src={path_2} alt="" className="path-2"/>
                            <img src={rectangle} alt="" className="rectangle"/>
                            <img src={nasa} alt="" className="nasa"/>
                           
                            <img src={oval} alt="" className="oval"/> 
                            <img src={oval_1} alt="" className="oval-1"/>
                            <img src={fill_219} alt="" className="fill_219"/>
                            <img src={ian_espinosa} alt="" className="ian-espinosa"/>
                            <img src={linkedin} alt="" className="linkedin"/> 
                            <img src={combined_shape} alt="" className="combined_shape"/>
                           
                        </div>
                    </div>
                </div>
                </div>
            </div>


        <Footer />
        </Auxi>
    )
}

export default home