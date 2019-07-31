import React, { Component } from "react";
import "./interest.css";
import { AxiosResponse } from "axios";
// import axios from '../../core/services/axios-config';
//import axios from './../../../services/axios-config';
import { InterestDataService } from "../../../core/services/data/InterestService/Interest.data.service";
import { resolve } from "inversify-react";
import { TYPES } from "../../../core/services/ioc.types";
import Interest from "./../../../core/Models/Interest";

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
      showModal: true,
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
      setTimeout(() => {
        const interestPost = {
          user: this.props.userName,
          interest: this.selectedInterest
        };

        console.log(interestPost, "Saved");
      }, 5000);
    }
    this.setState({
      ...this.state,
      showModal: false
    });
  }

  handleChange(e: any) {
    console.log(this.selectedInterest, "Before sELECTED interest");
    if (this.selectedInterest.includes(e.target.value)) {
      let currentItem = this.selectedInterest[e.target.value];
      this.selectedInterest.pop(currentItem);
    } else {
      this.selectedInterest.push(e.target.value);
    }
    console.log(this.selectedInterest, " After sELECTED interest");
  }
  render() {
    if (this.state.showModal && this.props.showModal) {
      return (
        <div className="em-c-modal em-js-modal-only" id="">
          <div className="em-c-modal__window em-js-modal-window">
            <div className="em-c-modal__header">
              <h3 className="em-c-modal__title">Interests</h3>
              <button className="em-c-btn em-c-btn--bare em-c-modal__close-btn em-js-modal-close-trigger">
                <span
                  onClick={this.closeModal.bind(this)}
                  className="em-c-btn__text"
                >
                  Close
                </span>
              </button>
            </div>

            <div className="em-c-field em-c-field--checkbox em-is-valid">
              <div className="em-c-field__body">
                <ul className="em-c-option-list">
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
                </ul>
              </div>
            </div>

            <div className="em-c-modal__footer em-c-text-passage em-c-text-passage--small">
              <button onClick={this.save.bind(this)} type="submit">
                Save
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
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
