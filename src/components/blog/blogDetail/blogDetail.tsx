import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi';
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
                    <div className="blog-details-container  ">
                   
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
                     Ut jowl pork sunt, strip steak pig meatball sed biltong chuck deserunt beef ribs.
                      Do dolore incididunt consequat ribeye, tail velit.
                       Flank est pancetta, qui aliqua frankfurter venison.
                        Hamburger laborum beef ribs aute deserunt, sausage eiusmod turkey flank. Cow sirloin occaecat, reprehenderit kevin ground round in eu ham hock minim. 
                        Id biltong labore, nisi corned beef beef nulla pancetta. Kielbasa bresaola labore tenderloin sirloin.
                         Tri-tip sausage brisket, proident dolore ground round aliqua enim id nulla prosciutto incididunt pastrami short ribs pariatur.
                          Et sirloin laborum quis, pork pork loin short loin landjaeger mollit rump.
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