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