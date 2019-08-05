import {BlogDataService} from "./blog.data.service";
import { AxiosResponse } from "axios";
import Post from "../../../Models/Post";
import axios from '../../axios.config';
import {injectable} from 'inversify';

@injectable()
export class BlogMockService implements BlogDataService{


    getAllBlogPost(): Promise<AxiosResponse<Post[]>> {
        return axios.get<Post[]>('blog.json');
    }
    
    getBlogPost(postId: string): Promise<AxiosResponse<Post>> {
        return axios.get<Post>(`/post?id=${postId}`);
    }

    getPopularPost(blogId: string): Promise<AxiosResponse<Post>> {
        return axios.get<Post>(`/popular/${blogId}`);
    }

    getBlogPostByCategory(category: string): Promise<AxiosResponse<Post[]>> {
        return axios.get<Post[]>(`/blogarchive?category=${category}`);
    }

    filterBlogs(location: string, technology: string): Promise<AxiosResponse<Post[]>> {
        return axios.get<Post[]>(`/blogarchive?location=${location}&&technology=${technology}`);
    }

}