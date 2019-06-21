import React, { Component } from 'react';
import blog_image from '../../../asset/images/blog_image.png';
import BlogTileProps from '../../../core/Props/blogTileProps';

class blogTile extends Component<BlogTileProps>{

    render(){
       if(this.props.blogPost){
           let showImage = (this.props.type && this.props.type !== 'popular') ? 
           <img src={blog_image} alt="" className="custom-rec-blog-detail-small-area em-u-width-100" /> : ''
           return (
            <div className="em-u-margin-top-double">
                {showImage}
            <div className="em-u-text-align-left custom-blog-text-margin">
                <div className="custom-H3 ">{this.props.blogPost.title}</div>
                <div className="custom-paragraph ">This would be an article about a success story of data at ExxonMobil</div>
    
                <div className="custom-paragraph custom-rich-text-color em-u-margin-top ">Johnny Swim</div>
    
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