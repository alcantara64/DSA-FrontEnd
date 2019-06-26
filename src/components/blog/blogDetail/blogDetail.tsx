import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi';
import blog_image from './../../../asset/images/blog_image.png';
import blog_details from './../../../asset/images/blog_details.png';
import profile_pic from './../../../asset/images/profile_pic.png';
import arrow_icon from './../../../asset/images/arrow_icon.png';
import {RouteComponentProps} from 'react-router-dom';
import axios from 'axios';
import './blogDetail.css';
import Post from '../../../core/Models/Post';
import PostDTO from '../../../core/DTO/PostDTO';

export default class BlogDetail extends Component< IBlogDetails, IBlogDetailState> {

    constructor(props: IBlogDetails){
        super(props)
        this.state = {
            postDetail: {} as Post,
            postImageSrc: ''
        }
    }

    componentDidMount(){
        axios.get(`http://bis.southcentralus.cloudapp.azure.com:8090/xom-dsa-backend/post?id=${this.props.match.params.id}`).then(
            (res: PostDTO) => {
                if(res.data){
                    this.setState({
                        ...this.state,
                        postDetail: res.data,
                        postImageSrc: res.data.postImageUrl ? res.data.postImageUrl.replace('~', 'http://bis.southcentralus.cloudapp.azure.com:8090/xom-dsa-backend'): '',
                    })
                }                
            },
            (err) => console.log(err)
        )
    }
    
    render(){
        console.log(Object.entries(this.state.postDetail).length, 'Object.entries(this.state.postDetail).length')
        if(Object.entries(this.state.postDetail).length >= 1 && this.state.postDetail.constructor === Object){
            return (
                <Auxi>
                    <div className="custom-page-margin blog-details-container  ">
                   <div className="back-button-margin" >
                       <div className="inline"><img className="img-size" src={arrow_icon} alt=""/></div>
                       <div className="inline custom-link">BACK</div>
                   </div>
                    <div className="success-story">
                    <div className="custom-success-image">
                        <img className="success-img" src={this.state.postImageSrc} alt="" />
                    </div>
                    <div className="custom-success-image custom-success-details">
                    <div className="custom-link custom-uppercase custom-success-padding">{this.state.postDetail.category}</div>
                        <div className="custom-H1 custom-ftp">{this.state.postDetail.title}</div>
                        <div className="custom-H5 custom-brief-overview">{this.state.postDetail.introText.value}</div>
                        <div className="custom-paragraph custom-read">11 min read</div>
                        <div className="custom-H5">{this.state.postDetail.author.value} - Jan 20, 2019</div>
                    </div>
                        
                    </div>
                    
                    <div className="custom-paragraph custom-text-area">
                Bacon ipsum dolor amet salami shank tail tri-tip meatloaf. 
                Anim commodo pariatur, adipisicing esse filet mignon deserunt. 
                Turkey sed voluptate burgdoggen cow, boudin ipsum pastrami consequat reprehenderit pork belly cupidatat leberkas aliquip pancetta.
                 Ut jowl pork sunt, strip steak pig meatball sed biltong chuck deserunt beef ribs. <br/><br/>
                  Do dolore incididunt consequat ribeye, tail velit.
                   Flank est pancetta, qui aliqua frankfurter venison.
                    Hamburger laborum beef ribs aute deserunt, sausage eiusmod turkey flank. Cow sirloin occaecat, reprehenderit kevin ground round in eu ham hock minim. <br/><br/>
                    Id biltong labore, nisi corned beef beef nulla pancetta. Kielbasa bresaola labore tenderloin sirloin.
                     Tri-tip sausage brisket, proident dolore ground round aliqua enim id nulla prosciutto incididunt pastrami short ribs pariatur.
                      Et sirloin laborum quis, pork pork loin short loin landjaeger mollit rump. <br/><br/><br/>
                      <div>
                          <img src={blog_details} alt=""/>
                      </div>
                      <div className="custom-text-bottom-area">
                      Burgdoggen turkey nulla qui eiusmod ball tip drumstick brisket venison ground round anim culpa laboris. 
                      Eiusmod non picanha, tail veniam boudin excepteur in irure. In commodo turkey, non cupim tenderloin nostrud. 
                      Esse burgdoggen sed ad in laboris shank drumstick in. Kevin nostrud pancetta ham, pork chop sunt short loin quis nisi dolore pig. 
                      Eu meatloaf rump deserunt chicken. Fugiat porchetta picanha ground round cow, in buffalo incididunt beef ham hock short loin. <br/><br/>
                       Shankle andouille buffalo, aute hamburger cillum cupidatat magna commodo enim qui pork belly proident.
                        Sausage officia consequat elit, chuck kevin ex lorem adipisicing drumstick sunt fugiat in swine excepteur.
                         Leberkas beef cillum, ea sint tail kevin salami buffalo jowl rump. 
                         Tenderloin pork incididunt, sed occaecat cillum in tempor chicken ball tip culpa irure. <br/><br/>
                      </div>
                      <div>
                          <div className="custom-profile-pic"><img src={profile_pic} alt=""/></div>
                          <div className="custom-profile-pic">
                              <div className="custom-link custom-author-font">AUTHOR</div>
                              <div className="custom-author-padding custom-H3">Johnny Swim</div>
                              <div className="custom-paragraph">Productivity Solutions Advisor, GSC EMIT CES PROD SOL FULI&C PS</div>
                          </div>
                      </div>
                      </div>
                    </div>
                </Auxi>
            )}else{
                return ''
            }
    }
}

interface IBlogDetails extends RouteComponentProps<{id: string}> {

}

interface IBlogDetailState{
    postDetail: Post,
    postImageSrc: string
}