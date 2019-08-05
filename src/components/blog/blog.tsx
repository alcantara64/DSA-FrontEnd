import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import './blog.css';
import { AxiosResponse } from 'axios';
import SuggestedBlogs from './suggestedBlogs/suggestedBlogs';
import RecentBlogs from './recentBlogs/recentBlogs';
import PopularBlogs from './popularBlogs/popularBlogs';
import { resolve } from "inversify-react";
import { BlogDataService } from '../../core/services/data/BlogService/blog.data.service';
import Post from '../../core/Models/Post';
import Spinner  from '../../components/spinner/spinner'

import { TYPES } from '../../core/services/ioc.types';

class blog extends Component {

    @resolve(TYPES.BlogService) private readonly blogService: BlogDataService = {} as BlogDataService;
    state = {
        blogList: []
    }

    componentDidMount() {
        this.blogService.getAllBlogPost().then(
            (res: AxiosResponse<Post[]>) => {
                console.log(res, "response from Blog")
                this.setState({
                    ...this.state,
                    blogList: res.data
                })
            }
        ).catch(err => {
            console.log(err,"error in blog");
        });
    }

    render() {
        return (
            <Auxi>
                <div className=" custom-page-margin">
                    <div className="em-l-linelength-container em-u-text-align-left em-u-margin-top-double em-u-margin-bottom-double">

                        <div className="custom-the-blog-padding custom-H1">The Blog</div>
                        <div className="custom-paragraph">How-to's, Tips and Tricks, and Success Stories. Just for you.</div>
                    </div>


                    <div className="em-l em-l--two-column custom-recent-blog-area">
                        <RecentBlogs blogList={this.state.blogList} type={'recent'} />
                        <PopularBlogs blogList={this.state.blogList} type={'popular'} />
                    </div>
                    <SuggestedBlogs blogList={this.state.blogList} type={`Editor's Picks`} />
                    {
                        this.state.blogList.length > 0 ? '' :
                    <div className="em-c-loader ">
                        <Spinner/>
                    </div>
                    }
                </div>
            </Auxi>
        )
    }

}

export default blog