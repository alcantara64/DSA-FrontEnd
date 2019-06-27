import React, { Component } from 'react';
import Auxi from '../../hoc/Auxi';
import './blog.css';
import axios from 'axios';
import Page from '../../core/Models/Page';
import PageDTO from '../../core/DTO/PageDTO';
import EditorPick from './editorPick/editorPick';
import RecentBlogs from './recentBlogs/recentBlogs';
import PopularBlogs from './popularBlogs/popularBlogs';
import {Config} from '../../Config';

class blog extends Component {

    state = {
        pageDate: {} as Page,
        blogList: []
    }

    componentDidMount() {
        axios.get(`${Config.baseUrl}`).then(
            (res: PageDTO) => {
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
                     <EditorPick blogList={this.state.blogList} type={'EditorPick'}/> 
                </div>
            </Auxi>
        )
    }

}

export default blog