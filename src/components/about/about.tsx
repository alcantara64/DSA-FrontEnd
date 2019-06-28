import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import './about.css';
import Footer from '../app-footer/footer';
import skycraper from './../../assets/images/skycraper.png';
import quote_img from './../../assets/images/quote_img.png';
import analytics from './../../assets/images/analytics.png';
import about_profile_pic from './../../assets/images/about_profile_pic.png';
import team_work from './../../assets/images/teamwork.png';
import process from './../../assets/images/process.png';
import send from './../../assets/images/send-button.png';
import planning from './../../assets/images/planning.png';
import data_science from './../../assets/images/data-science.png';
import chess from './../../assets/images/chess-piece.png';
import customer from './../../assets/images/customer-outreach.png';
import shape from './../../assets/images/Shape.png';
import skycraper2 from './../../assets/images/skycraper2.png';


class about extends Component<{}, IAboutProps> {

    isEnterpriseClicked: boolean = false;
    isAnalyticsClicked: boolean = false;
    isScienceClicked: boolean = false;
    isStrategyClicked: boolean = false;
    isCustomerClicked: boolean = false;

    constructor(props: any) {
        super(props)
        this.state = {
            card: null
        }
    }

    componentDidMount() {
        this.onTileClickHandler('Enterprise Platforms')
    }

    private onTileClickHandler = (type: string) => {
        this.isEnterpriseClicked = false;
        this.isAnalyticsClicked = false;
        this.isScienceClicked = false;
        this.isStrategyClicked = false;
        this.isCustomerClicked = false;
        let currentState = { ...this.state };
        switch (type) {
            case 'Enterprise Platforms':
                this.isEnterpriseClicked = true;
                currentState.card = (
                    <div>

                        <div className="em-l-grid__item em-u-padding-none custom-medium-tile-area em-u-text-align-left custom-enterprise-container">

                            <div className="custom-padding-bottom custom-H2">Enterprise Platforms</div>

                            <div className="custom-data-science-width custom-paragraph">

                                We identify and evaluate new technologies, develop a platform and vendor strategy, and maintain and support technologies.                                            </div>

                        </div>


                        <div className="custom-exploratory em-l-grid em-l-grid--2up  em-u-padding-none custom-main-margin custom-medium-tile-area em-u-text-align-left">
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Technology Evaluations & Introductions</div>
                                <div className="custom-paragraph">Assess market for new and emerging technologies and evaluate for suitability for near-term use cases (SAP VORA).</div>

                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Vendor Management</div>
                                <div className="custom-paragraph">Maintain strategic partnerships to understand products in the marketplace and to maximize value from existing technologies.</div>


                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Platform Strategy</div>
                                <div className="custom-paragraph">Develop data and analytics technology strategies for the corporation (Technical roadmaps, reference architecture).</div>


                            </div >
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Technology Support</div>
                                <div className="custom-paragraph">Maintain and support a diverse platform of interconnected data and analytics technologies.</div>


                            </div>
                        </div>
                    </div>
                )
                this.setState({
                    card: currentState.card
                })
                break
            case 'Data & Analytics Solutions':
                this.isAnalyticsClicked = true;
                currentState.card = (
                    <div>

                        <div className="em-l-grid__item em-u-padding-none custom-medium-tile-area em-u-text-align-left">

                            <div className="custom-padding-bottom custom-H2">Data & Analytics Solutions</div>

                            <div className="custom-data-science-width custom-paragraph">

                                We guide customers through the entire data and analytics process, including design, consultation, acquisition, integration, modeling, analysis, and visualization.
                        </div>
                        </div>


                        <div className="custom-exploratory em-l-grid em-l-grid--2up  em-u-padding-none custom-main-margin custom-medium-tile-area em-u-text-align-left">
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Solution Consultation & Design</div>
                                <div className="custom-paragraph">Assess business needs and goals for leveraging data to get insights and then translate into tangible work activities.</div>

                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Data Acquisition & Integration</div>
                                <div className="custom-paragraph">Acquire data from multiple data sets (in many formats) and build business and technical rules to transform it into a structure that can be leveraged for analysis.</div>


                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Data Modeling & Analysis</div>
                                <div className="custom-paragraph">Build optimized data models from multiple data sources, including large data sets, under one coherent structure enabling deeper analysis.</div>


                            </div >
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Data Visualization</div>
                                <div className="custom-paragraph">Leverage visualization tools to build and deliver intuitive and interactive dashboards; enable teams to develop and support their own visualization dashboards (Tableau).</div>


                            </div>
                        </div>
                    </div>
                )
                this.setState({
                    card: currentState.card
                })
                break
            case 'Data Science':
                this.isScienceClicked = true;
                currentState.card = (
                    <div>

                        <div className="em-l-grid__item em-u-padding-none custom-medium-tile-area em-u-text-align-left">

                            <div className="custom-padding-bottom custom-H2">Data Science</div>

                            <div className="custom-data-science-width custom-paragraph">

                                We enable and assist with exploratory analysis, research, productization and support, and various data science platforms.
                                            </div>

                        </div>


                        <div className="custom-exploratory em-l-grid em-l-grid--2up  em-u-padding-none custom-main-margin custom-medium-tile-area em-u-text-align-left">
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Exploratory Analysis</div>
                                <div className="custom-paragraph">Conduct exploratory analysis on data using advanced analytics resulting in new opportunity identification.</div>

                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Applied Research</div>
                                <div className="custom-paragraph">Build custom machine learning models to augment the business decision-making process using Natural Language Process & Computer Vision techniques.</div>


                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Model Productization & Support</div>
                                <div className="custom-paragraph">Operationalize data science solutions (models) and integrate into business workflows.</div>


                            </div >
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Technology Platforms</div>
                                <div className="custom-paragraph">AI/ML enablement platforms for developing, training and deploying models from individual data scientists to large collaborative teams.</div>


                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Citizen Data Scientist Enablement</div>
                                <div className="custom-paragraph">Cultivate data science skills among business analysts with strong domain knowledge and interest to learn and experiment.</div>


                            </div>
                        </div>
                    </div>
                )

                this.setState({
                    card: currentState.card
                })
                break
            case 'Strategy & Practices':
                this.isStrategyClicked = true;
                currentState.card = (
                    <div>

                        <div className="em-l-grid__item em-u-padding-none custom-medium-tile-area em-u-text-align-left">

                            <div className="custom-padding-bottom custom-H2">Strategy & Practices</div>

                            <div className="custom-data-science-width custom-paragraph">

                                We manage the Enterprise Data Roadmap, strengthen career development and talent, and provide tools and guidance for data at ExxonMobil.                        </div>
                        </div>


                        <div className="custom-exploratory em-l-grid em-l-grid--2up  em-u-padding-none custom-main-margin custom-medium-tile-area em-u-text-align-left">
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Enterprise Data Roadmap</div>
                                <div className="custom-paragraph">Capitalize on integrated data driven opportunities by documenting tangible investment activities to enable data driven efforts.</div>

                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Talent Management</div>
                                <div className="custom-paragraph">Provide leadership, in collaboration with business partners, to strengthen career development and grow data, analytics & data science talent.</div>


                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Data Practices</div>
                                <div className="custom-paragraph">Provide guidance and tools to enable businesses to govern and share their data (best practices, standards, policies).</div>


                            </div >
                        </div>
                    </div>
                )

                this.setState({
                    card: currentState.card
                })
                break
            case 'Customer Outreach':
                this.isCustomerClicked = true;
                currentState.card = (
                    <div>

                        <div className="em-l-grid__item em-u-padding-none custom-medium-tile-area em-u-text-align-left">

                            <div className="custom-padding-bottom custom-H2">Customer Outreach</div>

                            <div className="custom-data-science-width custom-paragraph">
                                We encourage and enable community leadership and data and analytics education. We also provide experts to answer a broad range of questions.
</div>
                        </div>


                        <div className="custom-exploratory em-l-grid em-l-grid--2up  em-u-padding-none custom-main-margin custom-medium-tile-area em-u-text-align-left">
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Community Leadership</div>
                                <div className="custom-paragraph">Develop and nurture platforms where people can ask questions, provide answers and get training on the latest concepts and tools (Analytics Community).</div>

                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">End User Help</div>
                                <div className="custom-paragraph">Bring data and analytics questions to experts who can answer a broad range of questions from which tools are the best to use for a given use case to hands-on assistance with combining or visualizing data (self-help materials, Doctor sessions).</div>


                            </div>
                            <div className="em-l-grid__item em-u-padding-left-none em-u-margin-bottom-double data-science-items">
                                <div className="mark-image">
                                    <img src={shape} alt="" />
                                </div>
                                <div className="custom-H4 no-text-transform">Education</div>
                                <div className="custom-paragraph">Offer data-specific information and courses designed to empower and increase knowledge about how to use data (Analytics Academy).</div>


                            </div >
                        </div>
                    </div>
                )

                this.setState({
                    card: currentState.card
                })
                break
            default:
                break;
        }
    }

    render() {

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
                                <div className=" em-l-grid__item em-u-padding-top who-are-we">

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
                                <div className="analytics-container">
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
                                    <span className="dot dot-current"></span>
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
                        <div className={`em-l-grid__item  custom-mid-page-card-column ${this.isEnterpriseClicked ? 'active-card' : 'custom-mid-page-card-column'} custom-margin-right-20`} onClick={() => this.onTileClickHandler('Enterprise Platforms')}>
                            <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                                <img src={skycraper2} alt="" />
                            </div>
                            <div className="custom-H4 no-text-transform ">Enterprise Platforms</div>
                            <div className="custom-paragraph">We identify and evaluate new technologies, develop a platform and vendor strategy, and maintain and support technologies.</div>

                        </div>
                        <div className={`em-l-grid__item  custom-mid-page-card-column ${this.isAnalyticsClicked ? 'active-card' : 'custom-mid-page-card-column'} custom-margin-right-20`} onClick={() => this.onTileClickHandler('Data & Analytics Solutions')}>
                            <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                                <img src={planning} alt="" />
                            </div>
                            <div className="custom-H4 no-text-transform">Data & Analytics Solutions</div>
                            <div className="custom-paragraph">We guide customers through the entire data and analytics process, including design, consultation, acquisition, integration, modeling, analysis, and visualization.</div>

                        </div>
                        <div className={`em-l-grid__item  custom-mid-page-card-column ${this.isScienceClicked ? 'active-card' : 'custom-mid-page-card-column'} custom-margin-right-20`} onClick={() => this.onTileClickHandler('Data Science')}>

                            <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                                <img src={data_science} alt="" />
                            </div>
                            <div className="custom-H4 no-text-transform">Data Science</div>
                            <div className="custom-paragraph">We enable and assist with exploratory analysis, research, productization and support, and various data science platforms.</div>

                        </div>
                        <div className={`em-l-grid__item  custom-mid-page-card-column ${this.isStrategyClicked ? 'active-card' : 'custom-mid-page-card-column'} custom-margin-right-20`} onClick={() => this.onTileClickHandler('Strategy & Practices')}>

                            <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                                <img src={chess} alt="" />
                            </div>
                            <div className="custom-H4 no-text-transform">Strategy & Practices</div>
                            <div className="custom-paragraph">We manage the Enterprise Data Roadmap, strengthen career development and talent, and provide tools and guidance for data at ExxonMobil.</div>

                        </div>
                        <div className={`em-l-grid__item  custom-mid-page-card-column ${this.isCustomerClicked ? 'active-card' : 'custom-mid-page-card-column'} custom-margin-right-20`} onClick={() => this.onTileClickHandler('Customer Outreach')}>

                            <div className="custom-factory-img em-u-text-align-center custom-tile-margin-center">
                                <img src={customer} alt="" />
                            </div>
                            <div className="custom-H4 no-text-transform">Customer Outreach</div>
                            <div className="custom-paragraph">We encourage and enable community leadership and data and analytics education. We also provide experts to answer a broad range of questions.</div>


                        </div>
                    </div>

                    {this.state.card}

                    <div className="footer-divider"></div>
                </div>


                <Footer />
            </Auxi>
        )
    }
}

interface IAboutProps {
    card: any;
}

export default about;