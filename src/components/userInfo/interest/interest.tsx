import React, { Component } from "react";
import "./interest.css";
import { AxiosResponse } from "axios";
// import axios from '../../core/services/axios-config';
//import axios from './../../../services/axios-config';
import { InterestDataService } from "../../../core/services/data/InterestService/Interest.data.service";
import { resolve } from "inversify-react";
import { TYPES } from "../../../core/services/ioc.types";
import Interest from "./../../../core/Models/Interest";
import Auxi from "../../../hoc/Auxi";

class UserInterest extends Component<IInterestProps, IInterestState> {
  selectedInterest: any = [];
  @resolve(TYPES.InterestService)
  private readonly interestService: InterestDataService = {} as InterestDataService;
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      interests: [],
      error: false,
      showModal: false,
      selectedInterest: []
    };
  }

  componentDidMount() {
    this.interestService
      .getAllInterest()
      .then((res: AxiosResponse<Interest[]>) => {
        this.setState({
          ...this.state,
          interests: res.data
        });
        console.log("test", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  private closeModal() {
    this.setState({
      ...this.state,
      showModal: false
    });
  }

  save() {
    console.log(this.selectedInterest, " in save");
    if (this.selectedInterest.length > 0) {
     this.interestService
     .postInterest(this.selectedInterest)
     .then(res =>{
       this.setState({
      ...this.state,
      showModal: false
    });

     })

     .catch(err=>{
       console.log(err)
     })
    }
  
  }

  closeModalHandler() {
    this.setState({
      ...this.state,
      showModal: false

    })
    }

  
  

  handleChange(e: any) {
   console.log(this.selectedInterest, "Before sELECTED interest");
   let payload:InterestPayLoad = {userId: this.props.userName, interestCode: e.target.value }
   if (this.selectedInterest.includes(payload)) {
     console.log(payload);
     let currentItem = this.selectedInterest.find(
       (x: any) => x == payload
     );
     console.log(currentItem, "currentItem");
     let index = this.selectedInterest.indexOf(currentItem);
     console.log(index, "currentIndex");
     this.selectedInterest.splice(index, 1);
   } else {
     
     this.selectedInterest.push(payload);
   }
   console.log(this.selectedInterest, " After sELECTED interest");
 }


  render() {
   
      return (

        <Auxi>
          {this.state.interests.map(list => (
            <li
              className="em-c-option-list__item"
              key={list.interestCode}
            >
              <label className="em-c-input-group">
                <input
                  id="check-1"
                  type="checkbox"
                  onChange={e => {
                    this.handleChange(e);
                  }}
                  name="checkname"
                  value={list.interestCode}
                  className="em-c-input-group__control em-js-checkbox-trigger"
                />
                <span className="em-c-input-group__text">
                  {list.name}
                </span>
              </label>
            </li>
          ))}
          <br/>
           <button onClick={this.save.bind(this)} className="em-c-btn em-c-btn--primary em-js-modal-confirm-trigger">
          <span className="em-c-btn__text">save</span>
        </button>
  
        </Auxi>
      );
    
  }
}
export default UserInterest;

interface IInterestState {
  interests: Interest[];
  loading: boolean;
  error: boolean;
  showModal: boolean;
  selectedInterest: any[];
}

interface IInterestProps {
  userName: string;
  showModal: boolean;
}

interface InterestPayLoad{
userId: string;
interestCode:string;

}