import React from 'react';
import Auxi from '../../hoc/Auxi';
import Learn_Illustration from './../../assets/images/Learn_Illustration.png';
import Community_Illustration from './../../assets/images/a.Community_Illustration.png';
import Illustration_Solutions from './../../assets/images/Illustration_Solutions.png';
import group_3 from './../../assets/images/group-3.png';
import group from './../../assets/images/Group-9.png';
import './home.css';
import Footer from '../app-footer/footer';
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <Auxi className="">
                <div className="em-l-grid em-l-grid--1-to-3up ">
                    <div className="em-l-grid__item custom-margin-left">
                        <div className="fpo-block">
                            <div className="grid-1">
                            <div className="custom-H1 body-header">Data at ExxonMobil</div>
                            <div >
                                    <img className="learn_illustration" src={Learn_Illustration} alt="learn"/>

                            </div>
                            <div className=" coming-soon-learn"><img src={group_3} alt=""/></div>
                            <div className="write-up-container">
                            <div className="learning-header underline-learn learn">Learning</div>
                            <div className="learning-content learn-content">Find the tutorials, classes and walkthroughs that you need to power your workflow</div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="em-l-grid__item custom-padding">

                        <div className="fpo-block fpo-block--dark solution-block-container">
                            <div className="grid-2">
                            <div className="body-header"></div>
                            <a  href="http://goto/acommunity" target="_blank" rel="noopener noreferrer" className="community-container">
                               
                                    <img src={Community_Illustration} alt="learn" className="community-illustration"/>
                            </a>
                            <a href="goto/acommunity" target="_blank" className="write-up-container">
                            <div className="custom-community-margin learning-header-community underline-community">a.Community</div>
                            <div className="custom-community-body-margin learning-content">Connect with the ExxonMobil data community. Find meetups, training, and other global and related communities.</div>
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="em-l-grid__item">

                        <div className="fpo-block solution-block-container">
                            <div className="grid-3">
                                <div className="body-header-data__container">
                                    <div className="body-header-data__marker"></div>
                                <div className=" custom-paragraph body-header-data">
                                    Find data standards, collaborate with influencers, and drive change through our community
                                </div>
                                </div>
                                <div >
                                    <img className="find-solutions"src={Illustration_Solutions} alt="learn"/>
                            </div>
                            <div className="  coming-soon-solution"><img src={group_3} alt=""/></div>
                            <div className="write-up-solutions">
                            <div className="custom-find-solutions learning-header underline-solution solution-header">Find Solutions</div>
                            <div className="custom-find-soltion-body learning-content learn-content">Lets's direct you to the tool, tutorial, or person that will get you what you need through our services portal.</div>
                            </div>
                            </div>
                        </div>
                    </div>

                </div >
                <div className="middle-section-container">
                <div className=" middle-section">
                    <div className="custom-H2 ">Want to see what we've done for others?</div>
                    <div className="custom-paragraph success-stories">Check out the success stories from our teams and teams we've worked with in the past</div>
                    <div>
                    <button className="em-c-btn em-c-btn--large custom-btn "><Link to="/blog">
                        <span className="em-c-btn__text custom-paragraph">See other Success Stories</span></Link>
                    </button>
                    </div>
                </div>

            <div className=" about-dsa">
                <div className="em-l-grid em-l-grid--2up ">
                <div className="em-l-grid__item first">
                    <div className="fpo-block">
                        <div className="custom-block-margin" >
                            <div className="about-header custom-H2">
                                DS&A is the data hub of ExxonMobil.
                            </div>
                            <div className="about-body custom-paragraph">
                                Learn more about us here.
                            </div>
                        </div>
                        <Link to={'/about'} className="about-container">
                        <button  className="em-c-btn em-c-btn--large large">
                            
                        <span className="em-c-btn__text custom-H2 btn-text">About DS&A</span>
                        </button>
                        </Link>
                    </div>
                </div>
                <div className="em-l-grid__item second">
                    <div className="fpo-block fpo-block--dark">
                        <div className="about-img-container">
                            <img src={group} alt=""/>
                        </div>
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