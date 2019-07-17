import React from 'react';
import Auxi from '../../hoc/Auxi';
import send from './../../assets/images/send-button.png';
import icon from './../../assets/images/icon.png';
import information from './../../assets/images/information.png';

import './services.css';
import { Link } from 'react-router-dom';


const services = () => {
    return (
        <Auxi>
            <div className="services-container">
                <div className="custom-heading custom-paragraph">
                    Let's get you what you need (a tutorial to talk to) - it only takes a minute. 
                </div>
                <div className="flex-container">
                <div className="custom-want-margin custom-H2">
                    I want to
                </div>
              
                <div className="large-flex">
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link custom-button-margin em-c-btn" title="find data to use">find data to use <img src={information} alt=""/></button>
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

                          {/* find data to use */}
                          <div className="flex-container">
                          <div className="custom-want-margin custom-H2">
                    Is it one of these?
                 </div>
                 <div>
                 <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link custom-button-margin em-c-btn" title="find datasets and dashboards">find datasets and dashboards</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="access standard data used across the company">access standard data used across the company</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="learn why metadata is so important">learn why metadata is so important</button>
                    </div>
                    <div className="custom-paragraph">If you don't see the option you wish you did, suggest it below.</div>
                 </div>
                
                </div>
                </div>

                <div className="flex-container">
                <div className="custom-want-margin custom-H2">
                    I'm in
                </div>
                
                <div className="large-flex">
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link custom-button-margin em-c-btn" title="Upstream">Upstream</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="Downstream">Downstream</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-build" title="Corporate">Corporate</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-sign" title="Other">Other</button>
                    </div>
                    <div className="custom-paragraph">If you don't see the option you wish you did, suggest it below.</div>

                    
                </div>
          
                </div>

                <div>
          <button className="em-c-btn em-c-btn--large custom-btn "><Link to="/blog">
                        <span className="em-c-btn__text custom-paragraph">Get Recommendations</span></Link>
                    </button>
          </div>

            {/* manage my data */} 
            <div className="flex-container">
                          <div className="custom-want-margin custom-H2">
                    Is it one of these?
                 </div>
                 <div>
                 <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link custom-button-margin em-c-btn" title="govern your data">govern your data</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="access data quality">access data quality</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="organize your data">organize your data</button>
                    </div>
                    <div className="custom-paragraph">If you don't see the option you wish you did, suggest it below.</div>

                 </div>
                
                
            </div>

             {/* build something with my data */}
             <div className="flex-container">
                          <div className="custom-want-margin custom-H2">
                    Is it one of these?
                 </div>
                 <div>
                 <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link custom-button-margin em-c-btn" title="gather, organize, and visualize data">gather, organize, and visualize data</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="explore data science services">explore data science services</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="hire a data engineer">hire a data engineer</button>
                    </div>
                    <div className="custom-paragraph">If you don't see the option you wish you did, suggest it below.</div>

                 </div>
                
                
            </div>

             {/* sign for a session with an expert */}
             <div className="flex-container">
                          <div className="custom-want-margin  custom-H2">
                    for
                 </div>
                 <div>
                 <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link custom-button-margin em-c-btn" title="Tableau">Tableau</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="JMP">JMP</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="Python">Python</button>
                    </div>
                    <div className="custom-paragraph">If you don't see the option you wish you did, suggest it below.</div>

                 </div>
                
                
            </div>

              {/* learn how to use a technology or tool */}
              <div className="flex-container">
                          <div className="custom-want-margin custom-H2">
                    Is it one of these?
                 </div>
                 <div>
                 <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link custom-button-margin em-c-btn" title="Python">Python</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="JMP">JMP</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="Tableau">Tableau</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="Azure">Azure</button>
                    </div>
                    <div className="custom-btn-align">
                    <button className="custom-em-c-btn custom-button-font custom-link em-c-btn custom-button-manage" title="Nope, none of these">Nope, none of these</button>
                    </div>
                    <div className="custom-paragraph">If you don't see the option you wish you did, suggest it below.</div>

                 </div>
                
                
            </div>

            <div className="custom-options">
                <div className="custom-H1">Here are your options.</div>
                <div className="flex-container-here">
                <div className="custom-paragraph custom-margin-here">I want to <span className="custom-link">find data to use</span> , specially <span  className="custom-link">find datasets and dashboards.</span>  I'm in <span  className="custom-link">Upstream</span> .</div>
                </div>
                <div className= "custom-margin-goto custom-link">Goto/DataDash</div>
                <div className="custom-datadash custom-paragraph">DataDash is a corporate data catalog tool that allows you to search and find datasets and dashboards across the corporation. 
                     You can explore recently added datasets, customize your business line you search within, gain access to How To's and success stories, and more.
                </div>
                <div className= "custom-paragraph">
                    Reach out to these contacts for guidance:
                </div>
                <div>
                <div className= "custom-margin-ali custom-ali">Ali Wilkin</div>
                <div className= "custom-margin-gsc custom-paragraph">GSC EMIT DATA SC&AN STGY&SVC MGIT</div>
                <div className= "custom-margin-houston custom-paragraph">Houston</div>
                <div className= "custom-margin-connect custom-paragraph">Ali can connect you with the people you need to talk to.</div>
                <div className="custom-link custom-margin-email">Email, IM, or Skype Call</div>
                </div>
            </div>


                <div className="footer-fixed">
                <Link to={'/services/form'} className="custom-link custom-margin-DSA">
                    I'm a DS&A Contact and want to fill out an internal form. 
                </Link>
                <div className="custom-box-shadow">
                
                    <div className=" custom-footer-margin ">
                        Don't see what you need? Suggest what you were hoping to see:
                    </div>
                    <div className="custom-input-width  "> 
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