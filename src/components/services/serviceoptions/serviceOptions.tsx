import React, { Component } from "react";
import Auxi from '../../../hoc/Auxi';
import information from '../../../assets/images/information.png';
import informationWhite from '../../../assets/images/information_white.png';
import Option from '../../../core/Models/Option';


export default class ServiceOptions extends Component<IServiceOptionsProps, IServiceOptionsState>{

    constructor(props: IServiceOptionsProps) {
        super(props)
        this.state = {
            showLabel: false,
            optionText: ''
        }
        this.showSelectedOptions = this.showSelectedOptions.bind(this);
    }

    showSelectedOptions(optionText: string, labelText: string) {
        if (optionText && !this.state.showLabel) {
            this.setState({
                ...this.state,
                showLabel: true,
                optionText: optionText
            })
        } else {
            this.setState({
                ...this.state,
                showLabel: false
            })
        }
        if (optionText) {
            let nextQuestionId = this.props.options.filter(x => x.optionText === optionText);
            var _showLabel = { ...this.state }.showLabel
            this.props.method(nextQuestionId[0].optionCode, labelText, _showLabel)
        }
    }

    render() {
        return (
            <Auxi >
                <div className="custom-want-margin custom-H2 ">
                    {this.props.label}
                </div>

                {this.state.showLabel ? <div className="large-flex custom--btn-options custom-btn-container" onClick={() => this.showSelectedOptions(this.state.optionText, this.props.label)} >{this.state.optionText}<img className="information-white-icon" src={informationWhite} alt="" /></div>
                    : this.props.options.map((opt) => {
                        return (<div key={opt.optionCode} className="custom-btn-contain large-flex custom-btn-align">
                            <button className="custom-service-btn"
                                onClick={() => this.showSelectedOptions(opt.optionText, this.props.label)} >{opt.optionText}
                                <img className="information-icon" src={information} alt="" />
                            </button>
                        </div>)

                    })}

                {this.props.label.toLowerCase() === 'is it one of these?' && this.state.showLabel ? <div className="custom-paragraph">if you don't see the option you wish you did, suggest it below</div> :
                    this.props.label.toLowerCase() === 'for' && this.state.showLabel ? <div className="custom-paragraph">if you don't see the technology you wish you did, suggest it below or visit the Technology page to see if you can find a contact</div> : ''}

            </Auxi>)
    }

}

export interface IServiceOptionsState {
    showLabel: boolean,
    optionText: string
}

export interface IServiceOptionsProps {
    label: string,
    options: Option[],
    method: any
}