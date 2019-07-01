import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import './blog.css';
import axios, { AxiosResponse } from 'axios';
import Page from '../../core/Models/Page';
import PageDTO from '../../core/DTO/PageDTO';
import SuggestedBlogs from './suggestedBlogs/suggestedBlogs';
import RecentBlogs from './recentBlogs/recentBlogs';
import PopularBlogs from './popularBlogs/popularBlogs';
import {Config} from '../../Config';
import { resolve } from "inversify-react";
import { BlogService } from '../../core/services/data/BlogService/blog.data.service';
import Post from '../../core/Models/Post';

class blog extends Component {

    @resolve("blogMockService") private readonly blogServiceProvider: BlogService = {} as BlogService;
    state = {
        pageDate: {} as Page,
        blogList: []
    }

    componentDidMount() {
            this.blogServiceProvider.getAllBlogPost().then(
            (res: AxiosResponse<Post[]>) => {
                console.log(res, "container res");
                this.setState({
                    ...this.state,
                    pageDate: res.data,
                    blogList: res.data
                })
                console.log(this.state, "blog page");
            }
        ).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <Auxi>
                <div className="custom-blog-area custom-page-margin">
                    <div className="em-l-linelength-container em-u-text-align-left em-u-margin-top-double em-u-margin-bottom-double">

                        <div className="custom-H1">The Blog</div>
                        <div className="custom-paragraph">How-to's, Tips and Tricks, and Success Stories. Just for you.</div>
                    </div>


                    <div className="em-l em-l--two-column custom-recent-blog-area">
                    <RecentBlogs blogList={this.state.blogList} type={'recent'}/>
                    <PopularBlogs blogList={this.state.blogList} type={'popular'} />
                    </div>
                     <SuggestedBlogs blogList={this.state.blogList} type={`Editor's Pick`}/> 
                </div>
            </Auxi>
        )
    }

}

export default blog