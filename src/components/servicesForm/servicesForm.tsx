import React from 'react';
import { Link } from 'react-router-dom';
import arrow_icon from '../../assets/images/arrow_icon.png';
import './servicesForm.css';



const servicesForm = () => {
    return (
        <div className="services-form-container">
            <Link to={'/services'} className="back-button-margin" >
                <div className="inline"><img className="img-size" src={arrow_icon} alt="" /></div>
                <div className="inline custom-link">BACK</div>
            </Link>
            <div className="custom-services-form custom-H1">How can we help?</div>
            <div className="custom-form custom-paragraph">This form is intended to be filled out by a DS&A contact (Advisor, DDL, etc.) during or after an initial engagement with a potential customer</div>
            <div className="custom-paragraph custom-TFS">
                <p>TFS Board</p>
                <select className="custom-select" name="" id="" >
                    <option value="">Select a TFS Board to add this request to </option>
                </select>
            </div>
            <div className="custom-paragraph custom-project-box">
                <p>Project / SWI / Base Initiative:</p>
                <input className="custom-input" type="text" placeholder="Enter Project / SMI / Base Initiative" />
            </div>
            <div className="custom-paragraph custom-project-box">
                <p>Description: </p>
                <textarea className="custom-input" name="" id="" value="" rows={5} placeholder="What are you trying to do?" ></textarea>
            </div>
            <div className="custom-paragraph custom-project-box">
                <p>PPL:</p>
                <input className="custom-paragraph custom-input" type="text" placeholder="What's the PPL?" />
            </div>
            <div className="custom-paragraph custom-project-box">
                <p>Customer/Business Line:</p>
                <input className="custom-input" type="text" placeholder="Who's the customer?" />
            </div>
            <div className="custom-paragraph custom-project-box">
                <p>Target Start Date:</p>
                <input className="custom-input" type="text" placeholder="MM/DD/YYYY" />
            </div>
            <div className="custom-paragraph custom-project-box">
                <p>Targrt End Date:</p>
                <input className="custom-input" type="text" placeholder="MM/DD/YYYY" />
            </div>
            <div className="custom-paragraph custom-project-box">
                <p>DS&A Resource</p>
                <input className="custom-input" type="text" placeholder="Who's the DS&A Resource?" />
            </div>
            <div className="custom-paragraph custom-project-box">
                <p>Primary Customer Contact:</p>
                <input className="custom-input" type="text" placeholder="Who should be included in the initial conversation?" />
            </div>
            <div className="custom-paragraph custom-project-box">
                <p>Business Stakeholders / Key Contacts and Location:</p>
                <textarea className="custom-input" name="" id="" value="" rows={6} placeholder="ex) John Smith at HHL, Frances Street in Curitiba" ></textarea>
            </div>
            <div className="custom-paragraph custom-project-box">
                Skills Needed (check all boxes that apply):
            </div>
                <div>
                    <div className="custom-checkbox-div">


                        <label className="custom-paragraph main">Analysis/Reporting/Visualization
        <input type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                        <label className="custom-paragraph main">Data Integration/Modeling
        <input type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                        <label className="custom-paragraph main-2">Enterprise Data
        <input type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                        <label className="custom-paragraph main">Business Application
        <input type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                        <label className="custom-paragraph main">Data Science
        <input type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                        <label className="custom-paragraph main-2">Platform
        <input type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                        <label className="custom-paragraph main">Business Data/Process
        <input type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                        <label className="custom-paragraph main">EMIT Core
        <input type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                        <label className="custom-paragraph main-2">Programming
        <input type="checkbox" />
                            <span className="geekmark"></span>
                        </label>
                    </div>

                </div>
                <div>
                    <button className="custom-submit-TFS em-c-btn em-c-btn--large custom-btn ">
                        <span className="em-c-btn__text custom-paragraph">Submit to TFS</span>
                    </button>
                    </div>
        </div>
    )
}

export default servicesForm;