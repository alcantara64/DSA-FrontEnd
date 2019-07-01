import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import send from './../../assets/images/send-button.png';
import './services.css';

const services = () => {
    return (
        <Auxi>
            <div className="services-container">
                <div className="custom-heading custom-paragraph">
                    Let's get you what you need ( a tutorial to talk to) - it only takes a minute. 
                </div>
                <div className="custom-want-margin">
                <div className="custom-inline custom-H2">
                    I want to
                </div>
                <button className="custom-em-c-btn custom-button-font custom-link custom-inline custom-button-margin em-c-btn">find data to use</button>
                </div>
                
                <div>
                <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage">manage my data</button>
                </div>
                <div>
                <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-build">build something with my data</button>
                </div>
                <div>
                <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-sign">sign up for a session with an expert</button>
                </div>
                <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-learn">learn how to use a technology or tool</button>
                <div className="custom-link custom-margin-DSA">
                    I'm a DS&A Contact and want to fill out an internal form. 
                </div>
                <div>
                
                    <div className=" custom-footer-margin custom-inline">
                        Don't see what you need? Suggest what you were hoping to see:
                    </div>
                    <div className="custom-input-width custom-inline "> <form method="post" action="#" role="search" className="em-c-search-form em-js-header-search">
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