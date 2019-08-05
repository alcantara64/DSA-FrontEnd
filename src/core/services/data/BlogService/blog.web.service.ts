import { AxiosResponse } from "axios";
import Post from "../../../Models/Post";
import axios from '../../axios.config';
import {injectable} from 'inversify';
import { BlogDataService } from "./blog.data.service";
import { identifier } from "@babel/types";

@injectable()
export class BlogWebService implements BlogDataService {

  getAllBlogPost(): Promise<AxiosResponse<Post[]>> {
    return axios.get<Post[]>('/blogarchive');
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
    var url = '';
    if(location !== '' && technology === ''){
      url = `/blogarchive?locationCode=${location}`;
    }else if(technology !== '' && location === ''){
      url = `/blogarchive?technologyCode=${technology}`;
    }else if(location !== '' && technology !== ''){
      url = `/blogarchive?locationCode=${location}&technologyCode=${technology}`;
    }
    return  axios.get<Post[]>(url);
    // return axios.get<Post[]>(`/blogarchive`+(location != null)?`?locationCode=${location}`: `?` + 
    // (technology != null && location != null) ?`&technologyCode=${technology}`: (technology != null && location == null) ? `technologyCode=${technology}`:``);
}

}