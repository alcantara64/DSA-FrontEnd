import { AxiosResponse } from "axios";
import Post from "../../../Models/Post";
import { injectable } from 'inversify';

@injectable()
export abstract class BlogService {
  abstract getAllBlogPost(): Promise<AxiosResponse<Post[]>>;
  abstract getBlogPost(postId: string): Promise<AxiosResponse<Post>>;
  abstract getPopularPost(blogId: string): Promise<AxiosResponse<Post>>
}