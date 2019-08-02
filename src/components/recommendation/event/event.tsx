import React, { Component } from 'react';
import Recommendation from '../../../core/Models/Recommendation';
import calender_img from '../../../assets/images/calender_img.png'
import location_icon from '../../../assets/images/location_icon.png'

export default class Event extends Component<IEventProps> {

    render() {
        let eventList = null;
        if (this.props.eventList.length > 0) {
            eventList = this.props.eventList.map((event) => {
                return (
                    <div key={event.eventCode} className="active-card-second em-l-grid__item custom-tile-area event-tile-area">
                        <div className="fpo-block custom-tile-inner">
                            <div className="custom-dispaly">


                            </div>
                            <div className="custom-H3 custom-header">{event.eventName}</div>
                            <div className="custom-paragraph">
                                {event.eventIntroText}
                            </div>
                            <div className="custom-flex">
                                <div>
                                    <img className="custom-calender-icon" src={calender_img} alt=""/>
                                </div>
                                <div className="custom-paragraph custom-date-padding">
                                    {event.eventDate}

                                </div>
                            </div>
                            <div className=" custom-flex-location location-container">
                                <div>
                                    <img className="custom-location-icon" src={location_icon} alt=""/>
                                </div>
                                <div className="custom-paragraph custom-location-padding">
                                    {event.eventLocation}    </div>
                            </div>
                            <div className="custom-eventx custom-link">
                                GO TO EVENTX
                    </div>
                        </div>
                    </div>
                )
            })
        } else {
            eventList = null;
        }

        return (

            <div>
                <div className="custom-paragraph custom-event-header">
                    These are the related meetups that are related to this topic. Check them out if they're in your areas:
    </div>

                <div className="em-l-grid em-l-grid--3up event-container">
                    {eventList}
                </div>

                <div className="custom-flex-location">
                    <div className="custom-link">
                        GO TO EVENTX TO SEE MORE EVENTS
    </div>
                    <div>
                        {/* <img className="custom-goto" src={share} alt=""/> */}
                    </div>
                </div>
            </div>
        )
    }
}

interface IEventProps {
    eventList: Recommendation[]
}


