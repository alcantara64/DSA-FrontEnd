import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi';
import arrow_icon from '../../../assets/images/arrow_icon.png';
import {RouteComponentProps, Link} from 'react-router-dom';
import './blogDetail.css';
import Post from '../../../core/Models/Post';
import {Config} from '../../../Config';
import { resolve } from 'inversify-react';
import { TYPES } from '../../../core/services/ioc.types';
import { BlogDataService } from '../../../core/services/data/BlogService/blog.data.service';
import PostDTO from '../../../core/DTO/PostDTO';

export default class BlogDetail extends Component< IBlogDetails, IBlogDetailState> {

    @resolve(TYPES.BlogService) private readonly blogService: BlogDataService = {} as BlogDataService;

    constructor(props: IBlogDetails){
        super(props)
        this.state = {
            postDetail: {} as Post,
            postImageSrc: '',
            blogImageSrc: '',
            authorImageSrc: ''
        }
    }

    goToBlogPage(){
        this.props.history.push('/blog') ;
    }

    componentDidMount(){
        this.blogService.getBlogPost(this.props.match.params.id).then(
            (res: PostDTO) => {
                if(res.data){
                    this.setState({
                        ...this.state,
                        postDetail: res.data,
                        postImageSrc: res.data.postImageUrl ? res.data.postImageUrl.replace('~', `${Config.baseUrl}`): '',
                        blogImageSrc: res.data.blogImageUrl ? res.data.blogImageUrl.replace('~', `${Config.baseUrl}`): '',
                        authorImageSrc: res.data.authorImageUrl ? res.data.authorImageUrl.replace('~', `${Config.baseUrl}`): '',

                    })
                }                
            },
            (err) => console.log(err)
        )
    }
    
    render(){
        if(Object.entries(this.state.postDetail).length >= 1 && this.state.postDetail.constructor === Object){
            return (
                <Auxi>
                    <div className="blog-details-container  ">
                    <Link to={'/blog'} className="back-button-margin" >
                       <div className="inline"><img className="img-size" src={arrow_icon} alt=""/></div>
                       <div className="inline custom-link">BACK</div>
                   </Link>
                    <div className="success-story">
                    <div className="custom-success-image">
                        <img className="success-img" src={this.state.blogImageSrc} alt="" />
                    </div>
                    <div className="custom-success-image custom-success-details">
                    <div className="custom-link custom-uppercase custom-success-padding">{this.state.postDetail.category}</div>
                        <div className="custom-H1 custom-ftp">{this.state.postDetail.title}</div>
                        <div className="custom-H5 custom-brief-overview">{this.state.postDetail.introText}</div>
                        <div className="custom-paragraph custom-read">{this.state.postDetail.timeRead} min read</div>
                        <div className="custom-H5">{this.state.postDetail.author} - {this.state.postDetail.published}</div>
                    </div>
                        
                    </div>
                    
                    <div className="custom-paragraph custom-text-area">
                        {this.state.postDetail.topPost}
                      <div>
                          <img src={this.state.postImageSrc} alt=""/>
                      </div>
                      <div className="custom-text-bottom-area">
                      {this.state.postDetail.bottomPost}
                      </div>
                      <div className="em-u-margin-top-double">
                          <div className="custom-profile-pic"><img src={this.state.authorImageSrc} alt=""/></div>
                          <div className="custom-profile-pic">
                              <div className="custom-link custom-author-font">AUTHOR</div>
                              <div className="custom-author-padding custom-H3">{this.state.postDetail.author}</div>
                              <div className="custom-paragraph">{this.state.postDetail.authorDepartment}</div>
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
    postImageSrc: string,
    blogImageSrc: string,
    authorImageSrc: string
}