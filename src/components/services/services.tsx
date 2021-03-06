import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import send from './../../assets/images/send-button1x.png';
import { resolve } from "inversify-react";
import { TYPES } from '../../core/services/ioc.types';
import './services.css';
import arrow_icon from '../../assets/images/arrow_icon.png';
import { Link } from 'react-router-dom';
import { RecommendationDataService } from '../../core/services/data/RecommendationService/recommendation.data.service';
import { AxiosResponse } from 'axios';
import ServiceOptions from './serviceoptions/serviceOptions';
import Option from '../../core/Models/Option';
import ServiceOptionList from '../../core/Models/ServiceOptionList';
import icon_spinner from '../../assets/images/icon_spinner.svg';

class services extends Component<{}, IServiceState> {

    @resolve(TYPES.RecommendationService) private readonly recommendationService: RecommendationDataService = {} as RecommendationDataService;

    constructor(props: any) {
        super(props)
        this.onOptionSelectedHandler = this.onOptionSelectedHandler.bind(this);
    }

    componentDidMount() {
        this.recommendationService.getAllOptions().then(
            (res: AxiosResponse<Option[]>) => {
                let alloptions = res.data
                let _serviceOptions : ServiceOptionList[] = [];
                alloptions.map((opt) => {
                    let serviceOption = {} as ServiceOptionList;

                    if(!opt.isFirstOption){
                        let prev = alloptions.find(c=>c.optionCode === opt.parentOptionCode);
                        let exist = _serviceOptions.find(c=>c.labelName === prev!.nextOptionQuestionText);
                        if(exist === null || exist === undefined){
                            serviceOption.showLabel = false;
                            serviceOption.options = [];
                            serviceOption.labelName = prev!.nextOptionQuestionText;
                            serviceOption.sortOrder = 0;
                        }
                    }
                    else if(opt.isFirstOption){
                        let exist = _serviceOptions.find(c=>c.labelName === opt.firstOptionQuestionText);
                        if(exist === null || exist === undefined){
                            var optionViewModel = {} as Option;
                            optionViewModel.optionCode = opt.optionCode;
                            optionViewModel.optionText = opt.optionText;
                            optionViewModel.helpText = "";

                            serviceOption.showLabel = true;
                            serviceOption.options = [];
                            serviceOption.options.push(optionViewModel);
                            serviceOption.labelName = opt.firstOptionQuestionText;
                            serviceOption.sortOrder = 1;
                        }else{
                            var optionViewModel = {} as Option;
                            optionViewModel.optionCode = opt.optionCode;
                            optionViewModel.optionText = opt.optionText;
                            optionViewModel.helpText = "";
                            var index = _serviceOptions.findIndex(c=>c.labelName === exist!.labelName);
                            _serviceOptions[index].options.push(optionViewModel);
                        }
                    }
                    if(serviceOption.labelName != null)
                    _serviceOptions.push(serviceOption);

                    return serviceOption;   
                })
                _serviceOptions.forEach((obj, i) =>{
                    if(obj.sortOrder === 0)
                    _serviceOptions[i].sortOrder = i +  1
                });
                this.setState({
                    ...this.state,
                    optionList: alloptions,
                    filteredServiceOptionList: _serviceOptions
                });
                console.log(this.state)
            }
        ).catch(err => {
            console.log(err);
        });
    }

    onOptionSelectedHandler(optionCode: string, labelName: string, SelectMode: boolean) {
        var showRecommendationLabel = false;
        if (this.state) {

            //get latest option list
            let allOptions = [...this.state.optionList];
            let latestServiceOption = [...this.state.filteredServiceOptionList]
            let currentOption = latestServiceOption.find(a => a.labelName === labelName);

            if(SelectMode){
                latestServiceOption.forEach((opt, i) => {
                    if(opt.sortOrder > currentOption!.sortOrder)
                        latestServiceOption[i].showLabel = false
                })
            }else
            {
            //get selected option
            let option = allOptions.find((opt) => opt.optionCode === optionCode);

            var filteredServiceListOption = allOptions.filter((opt) => opt.parentOptionCode === optionCode)
            //get latest service option List
            
             if (typeof option !== 'undefined') {
                
                if(option!.nextOptionQuestionText !== null){
                let nextIndex = latestServiceOption.findIndex(c => c.labelName === option!.nextOptionQuestionText);
                //get max sortOrder and update new
                let nextOptions = filteredServiceListOption.map((opt) => {
                    var optionViewModel = {} as Option;
                    optionViewModel.optionCode = opt.optionCode;
                    optionViewModel.optionText = opt.optionText;
                    optionViewModel.helpText = option!.helpText;

                    return optionViewModel;
                })
                if(nextIndex > -1){
                latestServiceOption[nextIndex].options = nextOptions;
                latestServiceOption[nextIndex].showLabel = true;
                }
            }else{
                showRecommendationLabel = true;
                this.setState({
                    ...this.state,
                    recommendationPostId: optionCode,
                    showRecommendatonButton: showRecommendationLabel
                })
            }
                

            }
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
                        <Link to={'/'} className="back-button-margin" >
                       <div className="inline"><img className="img-size" src={arrow_icon} alt=""/></div>
                       <div className="inline custom-link">BACK</div>
                   </Link>
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
                                <button className="em-c-btn em-c-btn--large custom-btn ">
                                    <Link to={`/recommendation/${this.state.recommendationPostId}`}>
                                    <span className="em-c-btn__text custom-paragraph">Get Recommendations</span>
                                    </Link>
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
                <div className="em-c-loader ">
                <img src={icon_spinner} alt="Loading" />
            </div>
            )
        }
    }
}


interface IServiceState {
    showRecommendatonButton: boolean;
    recommendationPostId: string

    optionList: Option[];
    filteredServiceOptionList: ServiceOptionList[];

}


export default services;