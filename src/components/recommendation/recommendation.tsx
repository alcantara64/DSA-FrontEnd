import React, {Component} from 'react';
import './recommendation.css';
import dropdown from '../../assets/images/dropdown.png';
import one from '../../assets/images/one.png';
import number_2 from '../../assets/images/number_2.png';
import number2_profile from '../../assets/images/number2_profile.png';
import timer from '../../assets/images/timer.png';
import rating from '../../assets/images/rating.png';
import { resolve } from 'inversify-react';
import calender_img from '../../assets/images/calender_img.png'
import location_icon from '../../assets/images/location_icon.png'
import like_button from '../../assets/images/like_button.png';
import share from '../../assets/images/share.png';
import icon_spinner from '../../assets/images/icon_spinner.svg';
import { RouteComponentProps } from 'react-router';
import { TYPES } from '../../core/services/ioc.types';
import { RecommendationDataService } from '../../core/services/data/RecommendationService/recommendation.data.service';
import { AxiosResponse } from 'axios';
import Recommendations from '../../core/Models/Recommendation'


export default class Recommendation extends Component<IRecommendationProps, IRecommendationState>{

    @resolve(TYPES.RecommendationService) private readonly recommendationService: RecommendationDataService = {} as RecommendationDataService;

    componentWillReceiveProps(nextProps: IRecommendationProps) {
        if (nextProps.match.params.optionCode !== this.props.match.params.optionCode) {
          const currentOptionCode = nextProps.match.params.optionCode
            this.getRecommendations(currentOptionCode);
        }
      }

    componentDidMount(){
        this.getRecommendations();
    }

    getRecommendations(optionCode: string = ''){
        let optCode = optionCode ? optionCode: this.props.match.params.optionCode;
        this.recommendationService.getRecommendations(optCode).then(
            (res: AxiosResponse<Recommendations[]>) => {
                let recommendations = res.data;
                let contacts: Recommendations[] = [];
                let events: Recommendations[] = [];
                let resources: Recommendations[] = [];
                let links: Recommendations[] = [];
                let multilinks: Recommendations[] = [];

                recommendations.forEach((recommendation) => {
                    if(recommendation.linkCode !== null){
                        links.push(recommendation)
                    }
                    if(recommendation.eventCode !== null){
                        events.push(recommendation)
                    }
                    if(recommendation.resourceCode !== null){
                        resources.push(recommendation)
                    }
                    if(recommendation.contactCode !== null){
                        contacts.push(recommendation)
                    }
                    if(recommendation.multiLinkCode !== null){
                        multilinks.push(recommendation)
                    }
                })

                this.setState({
                    recommendationList: recommendations,
                    contactList: contacts,
                    eventList: events,
                    LinkList: links,
                    multiLinkList: multilinks,
                    resourceList: resources
                })
                console.log(this.state);
            },
            (err) => console.log(err)
        )
    }

    render(){
        return (
    
            <div className="recommendation-container">
                            <div className="custom-H1">Here are your options.</div>
                            <div className="flex-container-here">
                            <div className="custom-paragraph custom-margin-here">I want to <span className="custom-link">find data to use</span> <img className="custom-dropdown-style" src={dropdown} alt=""/> , specially <span  className="custom-link">find datasets and dashboards. <img className="custom-dropdown-style-right" src={dropdown} alt=""/></span>  I'm in <span  className="custom-link">Upstream <img className="custom-dropdown-style-right" src={dropdown} alt=""/></span> .</div>
                            </div>            
           
                

            
                <div className="custom-text-align">
                    <div  className="custom-paragraph">Thanks!</div>
                    <div  className="custom-paragraph">
                        We're getting you personalized results.
                    </div>
                    <div  className="custom-paragraph">One momemt please...</div>
                    <img src={icon_spinner} alt=""/>
                </div>
            
                            </div> 
                )   
    }

}

interface IRecommendationProps extends RouteComponentProps<{optionCode: string}> {

}

interface IRecommendationState {
    recommendationList: Recommendations[],
    contactList: Recommendations[],
    eventList: Recommendations[],
    multiLinkList: Recommendations[],
    LinkList: Recommendations[],
    resourceList: Recommendations[],
}