import React, { Component } from 'react';
import Recommendation from '../../../core/Models/Recommendation';
import Auxi from '../../../hoc/Auxi';

export default class Contact extends Component<IContactProps> {

    render() {
        var contactList = null
        if (this.props.contactList.length > 0) {

            contactList = this.props.contactList.map((contact) => {
                return (
                    <div className="custom-div-margin">
                        <div className="custom-number2-flex">
                            <div className="custom-number2-flexbasis">
                                {/* <img className=" custom-image2-size" src={number2_profile} alt=""/> */}
                            </div>
                            <div className="custom-margin-ali custom-ali">{contact.contactName}</div>

                        </div>

                        <div className="custom-ali-margin">
                            <div className="custom-margin-gsc custom-paragraph">{contact.contactDepartment}</div>
                            <div className="custom-margin-houston custom-paragraph">{contact.contactLocation}</div>
                            <div className="custom-margin-connect custom-paragraph">{contact.contactDescription}</div>
                            <div className="custom-link custom-margin-email">Email, IM, or Skype Call</div>
                        </div>

                        {/* */}
                        <div>
                            <div className="custom-paragraph">
                                These are the related meetups that are related to this topic. Check them out if they're in your areas:
</div>

                            <div className="em-l-grid em-l-grid--3up ">
                                <div className="active-card-second em-l-grid__item custom-tile-area">
                                    <div className="fpo-block custom-tile-inner">
                                        <div className="custom-dispaly">


                                        </div>
                                        <div className="custom-H3 custom-header">Azure Power Lunches</div>
                                        <div className="custom-paragraph">
                                            The Cloud team hosts a 30 minute virual session every Friday at 11 AM CT to learn how to utilize the power of Azure and build next generation applications.
</div>
                                        <div className="custom-flex">
                                            <div>
                                                {/* <img className="custom-calender-icon" src={calender_img} alt=""/> */}
                                            </div>
                                            <div className="custom-paragraph custom-date-padding">
                                                Fridays @ 11 AM CT
</div>
                                        </div>
                                        <div className=" custom-flex-location">
                                            <div>
                                                {/* <img className="custom-location-icon" src={location_icon} alt=""/> */}
                                            </div>
                                            <div className="custom-paragraph custom-location-padding">
                                                Microsoft Teams Meeting (virtual)    </div>
                                        </div>
                                        <div className="custom-eventx custom-link">
                                            GO TO EVENTX
</div>
                                    </div>
                                </div>


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

                    </div>
                )
            })

        } else {
            contactList = null;
        }

        return (
            <Auxi>
                <div className="custom-number2-flex">
                    <div className="custom-number2-flexbasis">
                        {/* <img className="custom-number2" src={number_2} alt=""/> */}
                    </div>
                    <div className="custom-paragraph">
                        Reach out to these contacts for guidance:
                {contactList}
                    </div>
                </div>
            </Auxi>
        )
    }
}

interface IContactProps {
    contactList: Recommendation[]
}
