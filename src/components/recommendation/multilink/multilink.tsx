import React, { Component } from 'react';
import Recommendation from '../../../core/Models/Recommendation';

export default class Multilink extends Component<IMultilinkProps> {

    render(){

        let multilinkList = null;
        if(this.props.multilinkList.length > 0){

            multilinkList = this.props.multilinkList.map((ml) => {
                return (
                    <div className="custom-text-margin custom-paragraph">{ml.linkText}
                     {/* <img className="custom-connect" src={share} alt=""/> */}
                     </div>
                )
            })
        }else{
            multilinkList = null;
        }

        
        return(
            <div >
            <div className="custom-carrer-flex">
                {/* <div className="custom-one-margin"><img src={one} alt=""/></div> */}
                <div className="custom-paragraph">Browse <span className="custom-link">Career Connect</span>
                 {/* <img className="custom-connect" src={share} alt=""/> */}
                  for the technology you're interested in. ExxonMobil has thousands of free classes available for you to use.  </div>
            </div>
            <div className="custom-check">
                {/* <div><img  className="custom-number2" src={number_2} alt=""/></div> */}
                <div className="custom-websites-margin">
                    <div className="custom-text-margin custom-paragraph">Check out these other external websites for great tutorials.</div>
                    {multilinkList}
    
    
                </div>
            </div>
        </div>
        )
    }
}

interface IMultilinkProps {
    multilinkList: Recommendation[]
}
