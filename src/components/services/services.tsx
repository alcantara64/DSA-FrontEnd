import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import send from './../../assets/images/send-button1x.png';
import { resolve } from "inversify-react";
import { TYPES } from '../../core/services/ioc.types';
import './services.css';
import { Link } from 'react-router-dom';
import { RecommendationDataService } from '../../core/services/data/RecommendationService/recommendation.data.service';
import axios,{ AxiosResponse } from 'axios';
import ServiceOptions from './serviceoptions/serviceOptions';
import Option from '../../core/Models/Option';
import ServiceOptionList from '../../core/Models/ServiceOptionList';

class services extends Component<{}, IServiceState> {

    @resolve(TYPES.RecommendationService) private readonly recommendationService: RecommendationDataService = {} as RecommendationDataService;

    constructor(props: any) {
        super(props)
        this.onOptionSelectedHandler = this.onOptionSelectedHandler.bind(this);
    }

    componentDidMount() {
        axios.get<Option[]>('https://api.myjson.com/bins/qx6x5').then(
            (res: AxiosResponse<Option[]>) => {
                let alloptions = res.data
                let filteredList = alloptions.filter(x => x.isFirstOption);
                let serviceOption = {} as ServiceOptionList;
                serviceOption.showLabel = true;
                serviceOption.options = filteredList;
                serviceOption.labelName = filteredList[0].firstOptionQuestionText;
                serviceOption.sortOrder = 1;
                let firstServiceList: ServiceOptionList[] = [];
                firstServiceList.push(serviceOption);

                this.setState({
                    ...this.state,
                    optionList: alloptions,
                    filteredOptionList: filteredList,
                    filteredServiceOptionList: firstServiceList
                });
                console.log(this.state)
            }
        ).catch(err => {
            console.log(err);
        });
    }

    onOptionSelectedHandler(optionCode: string) {
        var showRecommendationLabel = false;
        if (this.state) {

            //get latest option list
            let allOptions = [...this.state.optionList];

            //get selected option
            let option = allOptions.find((opt) => opt.optionCode === optionCode);

            //get latest service option List
            let latestServiceOption = [...this.state.filteredServiceOptionList]
            if (typeof option !== 'undefined') {

                //get max sortOrder and update new
                let maxSortOrder = 0;
                latestServiceOption.forEach((opt) => {
                    maxSortOrder = (opt.sortOrder > maxSortOrder) ? opt.sortOrder : maxSortOrder;
                })

                let optText = option.firstOptionQuestionText;
                
                let c = latestServiceOption.find((c) => c.labelName === optText);

                if(typeof c !== 'undefined'){
                    
                }else{}


                //push new service option 
                var filteredServiceListOption = allOptions.filter((opt) => opt.parentOptionCode === optionCode)
                let serviceOption = {} as ServiceOptionList;
                serviceOption.showLabel = true;
                serviceOption.options = filteredServiceListOption;
                serviceOption.labelName = option.nextOptionQuestionText;
                serviceOption.sortOrder = maxSortOrder + 1
                latestServiceOption.push(serviceOption);

            } else {
                showRecommendationLabel = true;
            }
            this.setState({
                ...this.state,
                filteredServiceOptionList: latestServiceOption,
                showRecommendatonButton: showRecommendationLabel
            })
            console.log(this.state);
        }
    }

    render() {
        if (this.state) {
            if (this.state.optionList.length > 0) {
                return (
                    <Auxi>
                        <div className="services-container">
                            <div className="custom-heading custom-paragraph">
                                Let's get you what you need (a tutorial to talk to) - it only takes a minute.
                    </div>
                            {this.state.filteredServiceOptionList.map((opt) => {
                                if (opt.showLabel) {
                                    return <ServiceOptions key={opt.labelName} label={opt.labelName} options={opt.options} method={this.onOptionSelectedHandler}></ServiceOptions>
                                }
                                else { return '' }
                            })}
                            {this.state.showRecommendatonButton ? 
                            <div className="custom-rec-buttom">
                                <button className="em-c-btn em-c-btn--large custom-btn "><Link to="/services">
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
    showRecommendatonButton: boolean;
    recommendationPostId: string

    optionList: Option[];
    filteredOptionList: Option[];
    filteredServiceOptionList: ServiceOptionList[];

}


export default services;