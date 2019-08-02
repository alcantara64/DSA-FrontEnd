import React, { Component } from 'react';
import Recommendation from '../../../core/Models/Recommendation';
import like_button from '../../../assets/images/like_button.png';
import timer from '../../../assets/images/timer.png';
import rating from '../../../assets/images/rating.png';

export default class Resource extends Component<IResourceProps> {

    render() {
        var resources = null;

        if (this.props.resourceList.length > 0) {
            resources = this.props.resourceList.map((rsc) => {
                return (
                    <div key={rsc.resourceCode} className="active-card em-l-grid__item custom-tile-area">
                        <div className="fpo-block custom-tile-inner">
                            <div className="custom-dispaly">
                                <div className="custom-paragraph">
                                    {rsc.resourceType}
                                </div>
                                <div>
                                    <img className="custom-like-bottom" src={like_button} alt=""/>
                                </div>
                            </div>
                            <div className="custom-H3 custom-header">{rsc.resourceTitle}</div>
                            <div className="custom-paragraph">
                            </div>
                            <div className="custom-rating">
                                <div className="custom-paragraph">{rsc.resourceIntroText}</div>
                            </div>
                            <div className="timer-rating-container">
                            <div><img className="custom-timer" src={timer} alt=""/></div>
                            <div ><img  className="custom-rating-padding" src={rating} alt=""/></div>
                            </div>
                           
                        </div>
                    </div>
                )
            })


        } else {
            resources = null;
        }

        return (
            <div>
                <div className="custom-paragraph custom-subheader">
                    Check out some of these resources:
                </div>
                <div className="em-l-grid em-l-grid--3up resources-container">
                    {resources}
                </div>

            </div>
        )
    }
}

interface IResourceProps {
    resourceList: Recommendation[]
}
