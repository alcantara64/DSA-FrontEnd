import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi';
import BlogTile from '../blogTile/blogTile'
import BlogListProps from '../../../core/Props/blogListProps';

export default class SuggestedBlogs extends Component<BlogListProps>{
    render(){

        let list = null;

        if(this.props.blogList.length > 0){
            list = this.props.blogList.map(blog => {
                return (
                    <div className="em-l-grid__item">
                    <BlogTile key={blog.id} blogPost={blog} type={'editorPick'}/>
                    </div>
                )
            })
        }else {
            list = null;
        }


        return (
            <Auxi>
                <div className="custom-tile-background em-u-padding-top-half custom-link-bold">
                        {this.props.type}
                    </div>


                    <div className="em-l-grid em-l-grid--3up custom-editor-blog-area">
                            {list}
                    </div>
                
            </Auxi>            
        )
    }
}