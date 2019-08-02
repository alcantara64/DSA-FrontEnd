import React, { Component } from 'react';
import user_profile from './../../assets/images/user_profile.png';
import add_tag from './../../assets/images/add_tag.png';
import Auxi from '../../hoc/Auxi';
import Footer from '../app-footer/footer';
import './userInfo.css';
import UserInterest from './interest/interest';
import { InterestDataService } from '../../core/services/data/InterestService/Interest.data.service';
import { TYPES } from '../../core/services/ioc.types';
import { resolve } from "inversify-react";
import { AxiosResponse } from "axios";
import Interest from './../../core/Models/Interest';
import Modal from '../modal/modal';


class userInfo extends Component<IUserInfoProps, IUserInfoState> {
  @resolve(TYPES.InterestService)
  private readonly interestService: InterestDataService = {} as InterestDataService;
  constructor(props: any) {
    super(props);
    this.state = {
      loading: false,
      interests: [],
      error: false,
      showModal: false
    };
  }

  componentDidMount() {
    const { userName } = this.props;
    if (userName) this.fetchUser(userName)

  }


  closeModalHandler() {
    this.setState({
      ...this.state,
      showModal: false
    })
  }

  render() {
    return (
      <Auxi className="">
        <div className="custom-user-container">
          <div><img className="custom-user-image" src={user_profile} alt="" /> </div>
          <div className="custom-welcome-margin custom-H2">Welcome, {this.props.displayName}</div>
          <div className="custom-interest-margin custom-text-size">Interests</div>
          <div className="custom-paragraph">
            We’ll use your choices to recommend different courses and resources to you.
            </div>
          <div className=" dashboard-btn-container  ">
            {
              this.state.interests.map((interest) => (<button key={interest.name} className="user-button dashboard-btn">{interest.name}</button>))


            }
          </div>
          <div className="custom-add-tag custom-cursor">
            <img src={add_tag} alt="" />
            <div className="custom-tag-margin custom-link" onClick={this.openModal.bind(this)}>Add Interest</div>
          </div>


        </div>
        <div className="footer-divider"></div>
        <Modal
          title="Interest"
          show={this.state.showModal}
          close={this.closeModalHandler.bind(this)}
          openHander={this.openModal.bind(this)}
        >

          <UserInterest showModal={this.state.showModal}  {...this.props} />

        </Modal>

        <Footer />
      </Auxi>
    )
  }
  
  openModal() {
    this.setState({
      ...this.state,
      showModal: true,
    })

  }

  private fetchUser(username: string) {
    this.interestService
      .getAllInterestByUser(username)
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

  private fetchAllInterest(username: string) {
    this.interestService.getAllInterest()
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

}
export default userInfo;

interface IUserInfoState {
  interests: Interest[];
  loading: boolean;
  error: boolean;
  showModal: boolean;
}

interface IUserInfoProps {
  displayName: string;
  isAuthed: boolean;
  userName: string;

}