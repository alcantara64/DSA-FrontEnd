import React, { Component } from 'react';
import Recommendation from '../../../core/Models/Recommendation';
import Auxi from '../../../hoc/Auxi';
import './contact.css';
import user_profile from '../../../assets/images/user_profile.png';


export default class Contact extends Component<IContactProps> {

    render() {
        var contactList = null
        if (this.props.contactList.length > 0) {

            contactList = this.props.contactList.map((contact) => {
                return (
                    <div key={contact.contactCode} className="custom-div-margin">
                            <div className="user-ali">
                            <img src={user_profile} alt="Alt Text" className="em-c-avatar" /></div>
                            

                        <div className="custom-ali-margin">
                            <div className="custom-margin-ali custom-ali">{contact.contactName}</div>
                        
                            <div className="custom-margin-gsc custom-paragraph">{contact.contactDepartment}</div>
                            <div className="custom-margin-houston custom-paragraph">{contact.contactLocation}</div>
                            <div className="custom-margin-connect custom-paragraph">{contact.contactDescription}</div>
                            <div className="custom-link custom-margin-email">Email, IM, or Skype Call</div>
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
                    <div className="custom-number2-flexbasiz">
                    {this.props.contactList.length > 0 ? this.props.contactList[0].sequence : ''}
                    </div>
                    <div className="custom-paragraphz">
                        <span className="custom-span">Reach out to these contacts for guidance:</span>
                
                <div className="custom-float-container">{contactList}</div>
                    </div>
                </div>
            </Auxi>
        )
    }
}

interface IContactProps {
    contactList: Recommendation[]
}
