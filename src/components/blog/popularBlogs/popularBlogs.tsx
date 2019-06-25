import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogTile from '../blogTile/blogTile'
import BlogListProps from '../../../core/Props/blogListProps';

export default class PopularBlogs extends Component<BlogListProps> {
    render(){
        let blogList = null;
        if(this.props.blogList.length > 0){
            blogList = this.props.blogList.map((blog, index) => {
                return (
                    <div className="em-l-linelength-container custom-blog-area-small">
                    <div className=" em-l em-l--two-column ">
                    <div className="em-l__main custom-blog-number-margin">
                        <div className="custom-number-digit">{index + 1}</div>
                    </div>
                    <div className="em-l__secondary em-u-text-align-left">
                        <div className="custom-margin-success-stories">
                            <div className="custom-font-success-stories ">
                                {blog.category}
                            </div>
                        </div>

                    <BlogTile key={blog.id} blogPost={blog} type={'popular'}/>


                    </div>
                </div>
                </div>
                );
            })
        }
        else{
            blogList = null;
        }


        return (
            <div className="em-l__secondary custom-popular-area">
                <div className="fpo-block custom-popular-background-area custom-H4" >Popular</div>
                    {blogList}
            </div>
        )
    }
}