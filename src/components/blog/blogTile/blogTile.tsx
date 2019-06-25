import React, { Component } from 'react';
import BlogTileProps from '../../../core/Props/blogTileProps';

class blogTile extends Component<BlogTileProps>{

    render(){
        var imageSRC = '';
        if(this.props.blogPost.postImageUrl){
            imageSRC = this.props.blogPost.postImageUrl.replace("~", "http://localhost:52770")
        }
       if(this.props.blogPost){


           let showImage = (this.props.type && this.props.type !== 'popular') ? 
           <img src={imageSRC} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" /> : ''
           return (
            <div className="em-u-margin-top-double">
                {showImage}
            <div className="em-u-text-align-left custom-blog-text-margin">
                <div className="custom-H3 ">{this.props.blogPost.title}</div>
                <div className="custom-paragraph ">{this.props.blogPost.postDetail.value}</div>
    
                <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">{this.props.blogPost.author.value}</div>
    
            </div>
        </div>
        );
       }else{
           return (
               <p>Blog not found</p>
           );
       }
    }
}

export default blogTile;