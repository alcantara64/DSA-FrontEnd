import React, { Component } from "react";
import QuestionOption from "../../../core/Models/QuestionOption";
import Auxi from '../../../hoc/Auxi';
import information from '../../../assets/images/information.png';
import informationWhite from '../../../assets/images/information_white.png';

export default class ServiceOptions extends Component<IServiceOptionsProps, IServiceOptionsState>{

    constructor(props: IServiceOptionsProps) {
        super(props)
        this.state = {
            showLabel: false,
            optionValue: {} as QuestionOption
        }
        this.showSelectedOptions = this.showSelectedOptions.bind(this);
    }

    showSelectedOptions(nextLabelId: number) {
        let labelValue = this.props.options.find(opt => opt.id === nextLabelId)
        if(labelValue && !this.state.showLabel){
                this.setState({
                    ...this.state,
                    showLabel: true,
                    optionValue: labelValue
                })
        }else{
            this.setState({
                ...this.state,
                showLabel: false,
                optionValue: {} as QuestionOption
            })
        }
        if(labelValue){
            this.props.method(labelValue.parentId)
        }
    }
    
    render() {
        return (
            <Auxi >
                <div className="custom-want-margin custom-H2 ">
                    {this.props.label}
                </div>
                <div className="large-flex custom-btn-container">
                    {this.state.showLabel ? <div className="custom--btn-options" onClick={() => this.showSelectedOptions(this.state.optionValue.id)} >{this.state.optionValue.description}<img className="information-white-icon" src={informationWhite} alt=""/></div> : this.props.options.map((option, index) => {
                        return (
                            <div key={option.id} className="custom-btn-align">
                                <button className="custom-service-btn" onClick={() => this.showSelectedOptions(option.id)} >{option.description} <img className="information-icon" src={information} alt=""/></button>
                               
                            </div>
                        );
                    })}
                </div>
            </Auxi>)
    }

}

export interface IServiceOptionsState {
    showLabel: boolean,
    optionValue: QuestionOption
}

export interface IServiceOptionsProps {
    label: string,
    options: QuestionOption[],
    method: any
}