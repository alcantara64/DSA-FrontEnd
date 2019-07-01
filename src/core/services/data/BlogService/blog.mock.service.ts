import {BlogService} from "./blog.data.service";
import { AxiosResponse } from "axios";
import Post from "../../../Models/Post";
import axios from '../../axios.config';
import {injectable} from 'inversify';

@injectable()
export class BlogMockService implements BlogService{


    getAllBlogPost(): Promise<AxiosResponse<Post[]>> {
        return axios.get<Post[]>('/');
    }
    
    getBlogPost(postId: string): Promise<AxiosResponse<Post>> {
        return axios.get<Post>(`/post/${postId}`);
    }

    getPopularPost(blogId: string): Promise<AxiosResponse<Post>> {
        return axios.get<Post>(`/popular/${blogId}`);
    }


}