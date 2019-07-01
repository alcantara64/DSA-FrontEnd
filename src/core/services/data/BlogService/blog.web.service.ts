import { AxiosResponse } from "axios";
import Post from "../../../Models/Post";
import axios from '../../axios.config';
import {injectable} from 'inversify';
import { BlogService } from "./blog.data.service";

@injectable()
export class BlogWebService implements BlogService {

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