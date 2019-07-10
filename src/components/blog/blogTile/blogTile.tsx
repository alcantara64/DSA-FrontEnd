import React, { Component } from 'react';
import BlogTileProps from '../../../core/Props/blogTileProps';
import { Link } from 'react-router-dom';
import {Config} from '../../../Config';

class blogTile extends Component<BlogTileProps>{

    render(){
        var imageSRC = '';
        if(this.props.blogPost.postImageUrl){
            imageSRC = this.props.blogPost.blogImageUrl.replace("~", `${Config.baseUrl}`)
        }
       if(this.props.blogPost){


           let showImage = (this.props.type && this.props.type !== 'popular') ? 
           <img src={imageSRC} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" /> : ''
           return (
            <Link className="custom-H3 em-u-margin-top-double" to={`/blog/${this.props.blogPost.id}`}>
                {showImage}
            <div className="em-u-text-align-left custom-blog-text-margin">
                <div className="custom-H3 ">{this.props.blogPost.title}</div>
                <div className="custom-paragraph ">{this.props.blogPost.introText}</div>
    
                <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">{this.props.blogPost.author}</div>
    
            </div>
        </Link>
        );
       }else{
           return (
               <p>Blog not found</p>
           );
       }
    }
}

export default blogTile;