import React from 'react';
import Auxi from '../../hoc/Auxi';
import './about.css';
import Footer from '../app-footer/footer';
import Find_Solutions_Illustration from './../../asset/images/Find_Solutions_Illustration.png';
import skycraper from './../../asset/images/skycraper.png';
import quote_img from './../../asset/images/quote_img.png';
import analytics from './../../asset/images/006-analytics.png';
import about_profile_pic from './../../asset/images/about_profile_pic.png';
import team_work from './../../asset/images/teamwork.png';
import process from './../../asset/images/process.png';
import send from './../../asset/images/send-button.png';
import planning from './../../asset/images/008-planning.png';
import data_science from './../../asset/images/data-science.png';
import chess from './../../asset/images/chess-piece.png';
import customer from './../../asset/images/customer-outreach.png';
import shape from './../../asset/images/Shape.png';
import skycraper2 from './../../asset/images/skycraper2.png';

const about = () => {
    return (
        <Auxi>
            <div className="custom-page-margin-left custom-about-height">

                <div className="em-u-text-align-left custom-header-margin-left custom-line-spacing">
                    <div className="custom-H1">Data powers everything we do.</div>
                    <div className="custom-paragraph custom-paragraph-width">We accelerate high-value, actionable insights through the delivery of scalable, enterprise data platforms, data science and analytics solutions.</div>
                </div>

                <div className="em-l em-l--two-column custom-mid-section-area">
                    <div className="em-l__main custom-main-area em-u-padding-right-none">

                        <div className="custom-page-align em-l-grid em-u-text-align-left em-l-grid--1-2-1 em-l-grid--break-fast">
                            <div className=" em-l-grid__item em-u-padding-top">

                                <div className="custom-padding-bottom custom-H3">Who are we?</div>

                                <div className="custom-paragraph">This website is sponsored by <b>Data Science and Analytics</b> within EMIT. We work to define and maintain data stadards,
                                collaborate with other influencers in the data and analytics space, and drive change for the better in your day-to-day work.
        </div>

                            </div>
                            <div className="custom-what em-l-grid__item em-u-padding-right-none">


                                <div className="custom-padding-bottom custom-H3">What can we do for you?</div>

                                <div className="custom-paragraph">We accelerate high-value, actionable insights through the delivery of scalable, enterprise data platforms, data science and analytics solutions. <br /><br />
                                </div>
                                <div className="custom-quote-width custom-quote-width">
                                </div>



                                <div className="row custom-line-spacing">
                                    <div className="column custom-right-tile-margin em-u-margin-left-none">
                                        <div><img className="custom-quote-width" src={quote_img} alt="" /></div>
                                        <div className="custom-paragraph">
                                            We were able to level set from across the business and technical folks, and then walk out of a day and a half engagement
                                            with a working prototype of a visualization with mock data
            </div>
                                        <div className="custom-link custom-line-spacing em-u-margin-top">
                                            <span className="custom-link ">Nate McIntire, C&D AND FTP VIZ LEAD</span>
                                        </div>

                                        <div className="custom-small-tile-underline">

                                        </div>

                                    </div>
                                    <div className="column custom-right-tile-margin custom-left-tile-margin">
                                        <div>
                                            <img className="custom-quote-width" src={quote_img} alt="" />

                                        </div>
                                        <div className="custom-paragraph">
                                            This design thinking workshop with data makes alot of progress and is an impressive team.
            </div>
                                        <div className="custom-link custom-line-spacing em-u-margin-top">
                                            <span className="custom-link ">Nick Smith, MS-BMR</span>
                                        </div>


                                        <div className="custom-small-tile-underline">

                                        </div>

                                    </div>

                                    <div className="column">
                                        <div>
                                            <img className="custom-quote-width" src={quote_img} alt="" />

                                        </div>
                                        <div className="custom-paragraph">We can save a lot of time just making a few small changes through data and analytics in this process.
            </div>
                                        <div className="custom-link custom-line-spacing em-u-margin-top">
                                            <span className="custom-link ">Jeremy Janicki, FTP</span>
                                        </div>


                                        <div className="custom-small-tile-underline">

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="custom-how-should custom-engage-services em-l-grid__item em-u-text-align-left em-u-width-100">

                            <div className="custom-padding-bottom custom-H3">How should you engage our services?</div>

                            <div className="custom-paragraph">Use the Services page to find the contact, resources, or external link you’re looking for. We know you’d rather deal with a person than a form, so we’ve tried our best to provide the contacts that will be most helpful.                </div>

                        </div>

                        <div className="custom-input custom-have em-l-grid__item em-u-width-100 custom-search-button-margin em-u-text-align-left">
                            <div className="custom-paragraph em-u-margin-bottom">Have another question you don’t see here? Send it our way.
        </div>


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
                    <div className="em-l__secondary em-u-text-align-left custom-secondary-area em-u-padding">
                        <div className="custom-H3 ">Our Core Values</div>
                        <div className="custom-secondary-tile-detail-area em-u-margin-top ">
                            <div>
                                <img src={skycraper} alt="" />
                            </div>
                            <div className="custom-factory-img"></div>
                            <div className="custom-H4 no-text-transform">Enterprise Platform</div>
                            <div className="custom-paragraph">Assess market for new and emerging technologies and evaluate for suitability for near-term use cases (SAP VORA).</div>
                        </div>


                        <div className="custom-secondary-tile-detail-area em-u-margin-top">
                            <div>
                                <img src={analytics} alt="" />
                            </div>
                            <div className="custom-factory-img"></div>
                            <div className="custom-H4 no-text-transform">Technical Expertise</div>
                            <div className="custom-paragraph">Maintain and support a diverse platform of interconnected data and analytics technolgies.</div>
                        </div>


                        <div className="custom-secondary-tile-detail-area em-u-margin-top">
                            <div>
                                <img src={team_work} alt="" />
                            </div>
                            <div className="custom-factory-img"></div>
                            <div className="custom-H4 no-text-transform">Corporate Breadth</div>
                            <div className="custom-paragraph">Develop data & analytics technology strategies for the corporation (technical roadmaps, reference architecture).</div>
                        </div>


                        <div className="custom-secondary-tile-detail-area em-u-margin-top">
                            <div>
                                <img src={process} alt="" />
                            </div>
                            <div className="custom-factory-img"> </div>
                            <div className="custom-H4 no-text-transform">E2E Solutions</div>
                            <div className="custom-paragraph">Maintain strategic partnerships to understand products in the marketplace and to maximize value from existing technolgies.</div>
                        </div>

                    </div>
                </div>

                <div className="custom-mid-background-area custom-mid-background">

                    <div className="row custom-testimonial-margin">
                        <div className="custom-mid-page-slider-photo-column">
                            <img src={about_profile_pic} alt="" className="custom-mid-photo-area" />

                        </div>


                        <div className="custom-mid-page-slider-details-column purple-text-color">

                            <div className="em-u-text-align-left">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>

                            <div className="custom-link purple-text-color no-text-transform custom-mid-page-header-margin">TESTIMONIALS</div>

                            <div className="custom-about-regular-h3 custom-margin">We were able to level set from across the business and technical folks, and then walk out of a 1.5 day engagement with a working prototype of a visualization with mock data.</div>


                            <div className="custom-paragraph purple-text-color custom-margin">Nate McIntire, C&D AND FTP VIZ LEAD</div>
                        </div>
                    </div>

                </div>



                <div className="em-l-grid em-l-grid--5up custom-medium-tile-area">
                    <div className="em-l-grid__item custom-mid-page-card-column custom-margin-right-20">
                        <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                            <img src={skycraper2} alt="" />
                        </div>
                        <div className="custom-H4 no-text-transform ">Enterprise Platforms</div>
                        <div className="custom-paragraph">We identify and evaluate new technologies, develop a platform and vendor strategy, and maintain and support technologies.</div>

                    </div>
                    <div className="em-l-grid__item custom-mid-page-card-column custom-margin-right-20">
                        <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                            <img src={planning} alt="" />
                        </div>
                        <div className="custom-H4 no-text-transform">Data & Analytics Solutions</div>
                        <div className="custom-paragraph">We guide customers through the entire data and analytics process, including design, consultation, acquisition, integration, modeling, analysis, and visualization.</div>

                    </div>
                    <div className="em-l-grid__item custom-mid-page-card-column custom-margin-right-20">

                        <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                            <img src={data_science} alt="" />
                        </div>
                        <div className="custom-H4 no-text-transform">Data Science</div>
                        <div className="custom-paragraph">We enable and assist with exploratory analysis, research, productization and support, and various data science platforms.</div>

                    </div>
                    <div className="em-l-grid__item custom-mid-page-card-column custom-margin-right-20">

                        <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                            <img src={chess} alt="" />
                        </div>
                        <div className="custom-H4 no-text-transform">Strategy & Practices</div>
                        <div className="custom-paragraph">We manage the Enterprise Data Roadmap, strengthen career development and talent, and provide tools and guidance for data at ExxonMobil.</div>

                    </div>
                    <div className="em-l-grid__item custom-mid-page-card-column">

                        <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                            <img src={customer} alt="" />
                        </div>
                        <div className="custom-H4 no-text-transform">Customer Outreach</div>
                        <div className="custom-paragraph">We encourage and enable community leadership and data and analytics education. We also provide experts to answer a broad range of questions.</div>


                    </div>
                </div>

                <div className="em-l-grid__item em-u-padding-none custom-medium-tile-area em-u-text-align-left">

                    <div className="custom-padding-bottom custom-H2">Data Science</div>

                    <div className="custom-data-science-width custom-paragraph">

                        We enable and assist with exploratory analysis, research, productization and support, and various data science platforms.
                                    </div>

                </div>


                <div className="custom-exploratory em-l-grid em-l-grid--2up  em-u-padding-none custom-main-margin custom-medium-tile-area em-u-text-align-left">
                    <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                        <div className="mark-image">
                            <img src={shape} alt=""/>
                        </div>
                        <div className="custom-H4 no-text-transform">Exploratory Analysis</div>
                        <div className="custom-paragraph">Conduct exploratory analysis on data using advanced analytics resulting in new opportunity identification.</div>

                    </div>
                    <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                    <div className="mark-image"> 
                            <img src={shape} alt=""/>
                        </div>
                        <div className="custom-H4 no-text-transform">Applied Research</div>
                        <div className="custom-paragraph">Build custom machine learning models to augment the business decision-making process using Natural Language Process & Computer Vision techniques.</div>


                    </div>
                    <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                    <div className="mark-image">
                            <img src={shape} alt=""/>
                        </div>
                        <div className="custom-H4 no-text-transform">Model Productization & Support</div>
                        <div className="custom-paragraph">Operationalize data science solutions (models) and integrate into business workflows.</div>


                    </div >
                    <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                    <div className="mark-image">
                            <img src={shape} alt=""/>
                        </div>
                        <div className="custom-H4 no-text-transform">Technology Platforms</div>
                        <div className="custom-paragraph">AI/ML enablement platforms for developing, training and deploying models from individual data scientists to large collaborative teams.</div>


                    </div>
                    <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                    <div className="mark-image">
                            <img src={shape} alt=""/>
                        </div>
                        <div className="custom-H4 no-text-transform">Citizen Data Scientist Enablement</div>
                        <div className="custom-paragraph">Cultivate data science skills among business analysts with strong domain knowledge and interest to learn and experiment.</div>

                       
                    </div>
                </div>
                <div className="footer-divider"></div>
            </div>


            <Footer />
        </Auxi>
    )
}

export default about;