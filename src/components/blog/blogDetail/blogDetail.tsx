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
import SuggestedBlogs from '../suggestedBlogs/suggestedBlogs';

export default class BlogDetail extends Component< IBlogDetails, IBlogDetailState> {

    @resolve(TYPES.BlogService) private readonly blogService: BlogDataService = {} as BlogDataService;

    constructor(props: IBlogDetails){
        super(props) 
        this.state = {
            blogListByCategory: [],
            postDetail: {} as Post,
            postImageSrc: '',
            blogImageSrc: '',
            authorImageSrc: '',
            
        }
    }

    componentWillReceiveProps(nextProps: IBlogDetails) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
          const currentPostId = nextProps.match.params.id
            this.getBlogDetail(currentPostId);
        }
      }

    goToBlogPage(){
        this.props.history.push('/blog') ;
    }

    getBlogDetail(id: string = ''){
        let postId = id ? id: this.props.match.params.id;
        this.blogService.getBlogPost(postId).then(
            (res: PostDTO) => {
                if(res.data){
                    this.setState({
                        ...this.state,
                        postDetail: res.data,
                        postImageSrc: res.data.postImageUrl ? res.data.postImageUrl.replace('~', `${Config.baseUrl}`): '',
                        blogImageSrc: res.data.blogImageUrl ? res.data.blogImageUrl.replace('~', `${Config.baseUrl}`): '',
                        authorImageSrc: res.data.authorImageUrl ? res.data.authorImageUrl.replace('~', `${Config.baseUrl}`): '',

                    })
                    this.getBlogListByCategory(res.data.archiveId , res.data.categoryId)
                }                
            },
            (err) => console.log(err)
        )
    }

    getBlogListByCategory(blogId: string, categoryId: string){
        this.blogService.getBlogPostByCategory(blogId, categoryId).then(
            (res) => {
                this.setState({
                    blogListByCategory: res.data
                })
            },
            error => {
console.log('error => ', error);
            }
        )
    }

    componentDidMount(){
        this.getBlogDetail();
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
                    <div className="custom-link custom-uppercase custom-success-padding">{this.state.postDetail.categoryName}</div>
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
                      <div className="custom-suggested-blog">
                      <SuggestedBlogs blogList={this.state.blogListByCategory} type={'Related Articles'} />
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
    blogListByCategory: Post[],
    postDetail: Post,
    postImageSrc: string,
    blogImageSrc: string,
    authorImageSrc: string
}