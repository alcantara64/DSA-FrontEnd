import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import send from './../../assets/images/send-button1x.png';
import { resolve } from "inversify-react";
import { TYPES } from '../../core/services/ioc.types';
import './services.css';
import { Link } from 'react-router-dom';
import { RecommendationDataService } from '../../core/services/data/RecommendationService/recommendation.data.service';
import Recommendation from '../../core/Models/Recommendation';
import { AxiosResponse } from 'axios';
import dropdown from '../../assets/images/dropdown.png';
import one from '../../assets/images/one.png';
import number_2 from '../../assets/images/number_2.png';
import number2_profile from '../../assets/images/number2_profile.png';
import share from '../../assets/images/share.png';
import ServiceOptions from './serviceoptions/serviceOptions';

class services extends Component<{}, IServiceState> {

    @resolve(TYPES.RecommendationService) private readonly recommendationService: RecommendationDataService = {} as RecommendationDataService;

    constructor(props: any) {
        super(props)
        this.onOptionSelectedHandler = this.onOptionSelectedHandler.bind(this);
    }

    componentDidMount() {
        this.recommendationService.getAllOptions().then(
            (res: AxiosResponse<Recommendation[]>) => {
                res.data[0].showLabel = true
                this.setState({
                    ...this.state,
                    allOptionList: res.data
                });
                console.log(this.state)
            }
        ).catch(err => {
            console.log(err);
        });
    }

    onOptionSelectedHandler(nextLabelId: number) {
        var showRecommendationLabel = false;
        if (this.state) {
            let allOptions = [...this.state.allOptionList]
            let nextLabelOptionList = allOptions.find((opt) => opt.id === nextLabelId);
            if (typeof nextLabelOptionList !== 'undefined') {
                nextLabelOptionList.showLabel = !nextLabelOptionList.showLabel;
                var currentnum = nextLabelOptionList.sortOrder;
                let allOptionList = allOptions.filter(o => o.sortOrder > currentnum)
                allOptionList.forEach(option => {
                    option.showLabel = false;
                });
            } else {
                showRecommendationLabel = true;
            }
            this.setState({
                ...this.state,
                showRecommendatonButton: showRecommendationLabel
            })

        }
    }

    render() {
        if (this.state) {
            if (this.state.allOptionList.length > 0) {
                return (
                    <Auxi>
                        <div className="services-container">
                            <div className="custom-heading custom-paragraph">
                                Let's get you what you need (a tutorial to talk to) - it only takes a minute.
                    </div>
                            {this.state.allOptionList.map((opt) => {
                                if (opt.showLabel) {
                                    return <ServiceOptions key={opt.id} label={opt.name} options={opt.questions} method={this.onOptionSelectedHandler}></ServiceOptions>
                                }
                                else { return '' }
                            })}
                            {this.state.showRecommendatonButton ? 
                            <div className="custom-rec-buttom">
                                <button className="em-c-btn em-c-btn--large custom-btn "><Link to="/blog">
                                    <span className="em-c-btn__text custom-paragraph">Get Recommendations</span></Link>
                                </button>
                            </div> : ''}

                        </div>

{/* <div className="custom-options">
                <div className="custom-H1">Here are your options.</div>
                <div className="flex-container-here">
                <div className="custom-paragraph custom-margin-here">I want to <span className="custom-link">find data to use</span> <img className="custom-dropdown-style" src={dropdown} alt=""/> , specially <span  className="custom-link">find datasets and dashboards. <img className="custom-dropdown-style-right" src={dropdown} alt=""/></span>  I'm in <span  className="custom-link">Upstream <img className="custom-dropdown-style-right" src={dropdown} alt=""/></span> .</div>
                </div>
                <div className="custom-flex-number">
                    <div className="custom-flex-basis">
                        <img className="custom-img-height" src={one} alt=""/>
                    </div>
                    <div className="">
                     <div className= "custom-margin-goto custom-link">Goto/DataDash</div>
                     <img className="custom-share-image" src={share} alt=""/>
                    </div>

                
                </div>
                <div className="custom-datadash custom-paragraph">DataDash is a corporate data catalog tool that allows you to search and find datasets and dashboards across the corporation. 
                     You can explore recently added datasets, customize your business line you search within, gain access to How To's and success stories, and more.
                </div>
                <div className="custom-number2-flex">   
                    <div className="custom-number2-flexbasis">
                        <img className="custom-number2" src={number_2} alt=""/></div>      
                           <div className= "custom-paragraph">
                    Reach out to these contacts for guidance:
                </div>
                </div>
                <div className="custom-div-margin">
                <div className="custom-number2-flex">
                    <div className="custom-number2-flexbasis"><img className=" custom-image2-size" src={number2_profile} alt=""/></div>
                    <div className= "custom-margin-ali custom-ali">Ali Wilkin</div>

                </div>

                <div className="custom-ali-margin">
                <div className= "custom-margin-gsc custom-paragraph">GSC EMIT DATA SC&AN STGY&SVC MGIT</div>
                <div className= "custom-margin-houston custom-paragraph">Houston</div>
                <div className= "custom-margin-connect custom-paragraph">Ali can connect you with the people you need to talk to.</div>
                <div className="custom-link custom-margin-email">Email, IM, or Skype Call</div>
                </div>
                </div>
            </div> */}

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
        } else {
            return (
                //loaader sign
                '')
        }
    }
}


interface IServiceState {
    allOptionList: Recommendation[];
    showRecommendatonButton: boolean;
    recommendationPostId: string
}


export default services;