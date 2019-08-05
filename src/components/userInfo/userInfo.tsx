import React, { Component } from "react";
import user_profile from "./../../assets/images/user_profile.png";
import add_tag from "./../../assets/images/add_tag.png";
import Auxi from "../../hoc/Auxi";
import Footer from "../app-footer/footer";
import "./userInfo.css";
import UserInterest, { InterestPayLoad } from "./interest/interest";
import { InterestDataService } from "../../core/services/data/InterestService/Interest.data.service";
import { TYPES } from "../../core/services/ioc.types";
import { resolve } from "inversify-react";
import { AxiosResponse } from "axios";
import Interest from "./../../core/Models/Interest";
import Modal from "../modal/modal";
import Spinner from "../spinner/spinner";

class userInfo extends Component<IUserInfoProps, IUserInfoState> {
  selectedInterest: any[] = [];
  @resolve(TYPES.InterestService)
  private readonly interestService: InterestDataService = {} as InterestDataService;

  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      interests: [],
      error: false,
      showModal: false,
      userInterest: [],
      selectedInterest: [],
      errorMessage: "",
      isTouched : false,
      isSaved : false,
    };
  }

  componentDidMount() {
    const { userName } = this.props;
    if (userName) {
      this.fetchUser(userName);
      this.fetchAllInterest(userName);
    }
    if(this.state.interests.length > 0){
      this.state.interests.forEach(interest=>{
        if(interest.isUserChecked){
          this.selectedInterest = [...this.selectedInterest,interest.interestCode]
        }
      })
    }
  }

  componentDidUpdate(prevProps:IUserInfoProps,prevState:IUserInfoState){
  if(this.state.isSaved){
    this.fetchUser(this.props.userName);
    this.fetchAllInterest(this.props.userName);
  }
  }

  closeModalHandler() {
    this.setState({
      ...this.state,
      showModal: false
    });
  }

  save() {
    console.log("Selected Item In save", this.selectedInterest);
    
    if (this.state.isTouched) {
      var payLoad:any =[]
      this.selectedInterest.forEach(interest=>{
      let newPayload = {userId:this.props.userName, interestCode:interest}
        payLoad.push(newPayload)
      })
      console.log("Interest Payload", payLoad);
      this.interestService
        .postInterest(this.props.userName, payLoad)
        .then(res => {
          this.setState({
            ...this.state,
            showModal: false,
            isSaved :true,
          });
        })
        .catch(err => {
          console.log(err);
          this.setState({
            ...this.state,
            showModal :false,
            isSaved : false,
            error: true,
            errorMessage:
              "Oops!! We could not save your interest at the moment. try again later"
          });
        });
    }
  }

  handleChange(e: React.SyntheticEvent) {
    let target = e.target as HTMLInputElement;
    const code: any = target.value;
    console.log(this.selectedInterest, "Before sELECTED interest");
    if (this.selectedInterest.includes(code)) {
      console.log(code);
      let currentItem = this.selectedInterest.find((x: any) => x == code);
      console.log(currentItem, "currentItem");
      let index = this.selectedInterest.indexOf(currentItem);
      console.log(index, "currentIndex");
      this.selectedInterest.splice(index, 1);
    } else {
      this.selectedInterest.push(code);
    }
    this.setState({
      ...this.state,
      isSaved : false,
      isTouched : true
    })

    console.log(this.state.selectedInterest, " After SELECTED interest");
  }
  render() {
    if(this.state.loading){
      return <Spinner/>
    }
    return (
      <Auxi className="">
        <div className="custom-user-container">
          <div>
            <img className="custom-user-image" src={user_profile} alt="" />{" "}
          </div>
          <div className="custom-welcome-margin custom-H2">
            Welcome, {this.props.displayName}
          </div>
          <div className="custom-interest-margin custom-text-size">
            Interests
          </div>
          <div className="custom-paragraph">
            We’ll use your choices to recommend different courses and resources
            to you.
          </div>
          <div className=" dashboard-btn-container  ">
            {this.state.userInterest.map(interest => (
              <button key={interest.name} className="user-button dashboard-btn">
                {interest.name}
              </button>
            ))}
          </div>
          <div className="custom-add-tag customCursor">
            <img src={add_tag} alt="" />
            <div
              className="custom-tag-margin custom-link"
              onClick={this.openModal.bind(this)}
            >
              Add Interest
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <Modal
          title="Interest"
          show={this.state.showModal}
          close={this.closeModalHandler.bind(this)}
          openHander={this.openModal.bind(this)}
          save={this.save.bind(this)}
        >
        
          <ul className="em-c-option-list">
            {this.state.interests.map(list => (
              <li className="em-c-option-list__item" key={list.interestCode}>
                <label className="em-c-input-group">
                  <input
                    id="check-1"
                    type="checkbox"
                    defaultChecked={list.isUserChecked}
                    onChange={e => {
                      this.handleChange(e);
                    }}
                    name="checkname"
                    value={list.interestCode}
                    className="em-c-input-group__control em-js-checkbox-trigger"
                  />
                  <span className="em-c-input-group__text">{list.name}</span>
                </label>
              </li>
            ))}
          </ul>
          <br />
          <button
            onClick={this.save.bind(this)}
            className="em-c-btn em-c-btn--primary em-js-modal-confirm-trigger"
          >
            <span className="em-c-btn__text">save</span>
          </button>
        </Modal>

        <Footer />
      </Auxi>
    );
  }

  openModal() {
    this.setState({
      ...this.state,
      showModal: true
    });
  }

  private fetchUser(username: string) {
    this.interestService
      .getAllInterestByUser(username)
      .then((res: AxiosResponse<Interest[]>) => {
        this.setState({
          ...this.state,
          userInterest: res.data,
          loading : false,
          isTouched : false,
          isSaved : false,
        });
        console.log("getAllInterestByUser", res.data);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...this.state,
          loading : false,
          error : true,
          errorMessage : ""
        });
      });
  }

  private fetchAllInterest(username: string) {
    this.interestService
      .getAllInterest(username)
      .then((res: AxiosResponse<Interest[]>) => {
        this.setState({
          ...this.state,
          interests: res.data,
          loading : false,
          error : false,
          errorMessage : '',
          isTouched : false,
          isSaved :false,
        });
        console.log("fetchAllInterest", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
export default userInfo;

interface IUserInfoState {
  interests: Interest[];
  loading: boolean;
  error: boolean;
  showModal: boolean;
  userInterest: Interest[];
  selectedInterest: Interest[];
  errorMessage: string;
  isTouched : boolean;
  isSaved : boolean;
}

interface IUserInfoProps {
  displayName: string;
  isAuthed: boolean;
  userName: string;
}
