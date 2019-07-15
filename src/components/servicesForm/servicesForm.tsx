import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrow_icon from '../../assets/images/arrow_icon.png';
import checkBox from '../../assets/images/checkBox.png';
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
                <input className="custom-input" type="text" placeholder="Who's the DS&A Resource" />
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
            <div>
<div><img src={checkBox} alt=""/></div>
<p className="custom-paragraph">
    Analysis/Reporting/Visualization
</p>
            </div>
            </div>
        </div>
    )
}

export default servicesForm;