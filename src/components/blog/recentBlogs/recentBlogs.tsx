import React, { Component } from 'react';
import BlogListProps from '../../../core/Props/blogListProps';
import { Link } from 'react-router-dom';
import './recentBlogs.css';
import BlogTile from '../blogTile/blogTile';

export default class RecentBlogs extends Component<BlogListProps>{
    
 render(){
     if(this.props.blogList.length > 0){
       return ( <div className="em-l__main custom-recent-area">
        <div className="custom-recent-background-area custom-H4 ">Recent Stories</div>

        <div className="em-u-margin-top-double em-u-margin-bottom-double">
            <div className = "upper-image">
        <BlogTile key={this.props.blogList[2].id} blogPost={this.props.blogList[2]} type={'recent'}/>
        </div>
        </div>


        <div className=" em-l-grid em-l-grid--halves custom-small-area-post">
            <div className="em-l-grid__item ">

                <div className="em-u-margin-top-double ">
                <BlogTile key={this.props.blogList[1].id} blogPost={this.props.blogList[1]} type={'recent'}/>
                </div>

            </div>
            <div className="em-l-grid__item ">

                <div className="em-u-margin-top-double " >
                <BlogTile key={this.props.blogList[0].id} blogPost={this.props.blogList[0]} type={'recent'}/>
                </div>

            </div>

        </div>


        <div className="custom-full-archive em-l-linelength-container em-u-text-align-left custom-link-margin">
            <Link to="/Archives" className="custom-link">
                See Full Archive of Article
            </Link>
        </div>

    </div>)
     }else{
     return null;
     }
 }
}
