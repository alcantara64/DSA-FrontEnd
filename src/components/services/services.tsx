import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import send from './../../assets/images/send-button.png';
import './services.css';

const services = () => {
    return (
        <Auxi>
            <div className="serives-container">
                <div className="custom-heading custom-paragraph">
                    Let's get you what you need ( a tutorial to talk to) - it only takes a minute. 
                </div>
                <div className="flex-container">
                <div className="custom-want-margin">
                <div className="custom-inline custom-H2">
                    I want to
                </div>
                </div>
                <div className="large-flex">
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link custom-button-margin em-c-btn" title="find data to use">find data to use</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="manage my data">manage my data</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-build" title="build something with my data">build something with my data</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-sign" title="sign up for a session with an expert">sign up for a session with an expert</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-learn" title="learn how to use a technology or tool">learn how to use a technology or tool</button>
                    </div>
                    
                </div>
                </div>

                </div>
                <div className="footer-fixed">
                <div className="custom-link custom-margin-DSA">
                    I'm a DS&A Contact and want to fill out an internal form. 
                </div>
                <div className="custom-box-shadow">
                
                    <div className=" custom-footer-margin custom-inline">
                        Don't see what you need? Suggest what you were hoping to see:
                    </div>
                    <div className="custom-input-width custom-inline "> 
                    <form method="post" action="#" role="search" className="em-c-search-form em-js-header-search">
                                <div className="em-c-search__body">
                                    <input type="search" id="search" className="em-c-search__input custom-input-border" />
                                    <button className="em-c-btn custom-button-color em-c-btn--primary" aria-label="Search">
                                        <div className="em-c-btn__inner custom-button-width">
                                            <img src={send} alt="" />
                                        </div>
                                    </button>
                                </div>
                            </form>
                    </div>
                
                </div>
                </div>
                
        </Auxi>
    )
}

export default services;