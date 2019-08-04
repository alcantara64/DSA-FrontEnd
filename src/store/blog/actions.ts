import Post from "../../core/Models/Post";
import { BlogDataService } from "../../core/services/data/BlogService/blog.data.service";

export interface BlogActionState{
    loading: boolean;
    error: boolean;
    errorMessage: {};
    blogList: Post[];
}



export const GET_ALL_BLOGS = "GET_ALL_BLOGS";

export type BlogAction =
  | { type: 'GET_BLOGS_START';}
  | { type: 'GET_BLOGS_SUCCESS'; blogList: BlogActionState }
  | { type: 'GET_BLOGS_FAIL'; error: string };

  export function getBlogsStart(): BlogAction {
    return { type: 'GET_BLOGS_START' };
  }

  export function getBlogsSuccess(blogList: BlogActionState): BlogAction {
    return { type: 'GET_BLOGS_SUCCESS', blogList};
  }

  export function getBlogsFail(error: string): BlogAction {
    return { type: 'GET_BLOGS_FAIL', error};
  }

  