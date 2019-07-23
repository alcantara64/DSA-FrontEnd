import React, { Component } from "react";
import QuestionOption from "../../../core/Models/QuestionOption";
import Auxi from '../../../hoc/Auxi';

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
            <Auxi>
                <div className="custom-want-margin custom-H2">
                    {this.props.label}
                </div>
                <div className="large-flex">
                    {this.state.showLabel ? <div onClick={() => this.showSelectedOptions(this.state.optionValue.id)} >{this.state.optionValue.description}</div> : this.props.options.map((option, index) => {
                        return (
                            <div key={option.id} className="custom-btn-align">
                                <button onClick={() => this.showSelectedOptions(option.id)} >{option.description}</button>
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