import { AxiosResponse } from "axios";
import Interest from "../../../Models/Interest";
import { injectable } from 'inversify';
import User from './../../../Models/User';

@injectable()
export abstract class InterestDataService {
  abstract getAllInterest(): Promise<AxiosResponse<Interest[]>>;
  abstract getAllInterestByUser(userName: string): Promise<AxiosResponse<Interest[]>>;
//   abstract getPopularPost(blogId: string): Promise<AxiosResponse<Post>>;
//   abstract getBlogPostByCategory(blogId: string, category: string): Promise<AxiosResponse<Post[]>>;
}