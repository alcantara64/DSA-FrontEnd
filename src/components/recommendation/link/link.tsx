import React, { Component } from 'react';
import Recommendation from '../../../core/Models/Recommendation';
import Auxi from '../../../hoc/Auxi';

export default class Link extends Component<ILinkProps> {

    render(){

        let linkList = null;
        if(this.props.linkList.length > 0){
            linkList = this.props.linkList.map((link) => {
                return (
                    <Auxi>
                    <div className="custom-flex-number">
                    <div className="custom-flex-basis">
                        {/* <img className="custom-img-height" src={one} alt=""/> */}
                    </div>
                    <div className="">
                     <div className= "custom-margin-goto custom-link">{link.linkUrl}</div>
                     {/* <img className="custom-share-image" src={share} alt=""/> */}
                    </div>

                
                </div>
                <div className="custom-datadash custom-paragraph">{link.linkText}
                </div>
                </Auxi>
                )
                })
        }else{
            linkList = null;
        }

        return linkList;
    } 
}


interface ILinkProps {
    linkList: Recommendation[]
}
