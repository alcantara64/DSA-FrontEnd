import { AxiosResponse } from "axios";
import Interest from "../../../Models/Interest";
import { injectable } from 'inversify';

@injectable()
export abstract class InterestDataService {
  abstract getAllInterest(userName:string): Promise<AxiosResponse<Interest[]>>;
  abstract getAllInterestByUser(userName: string): Promise<AxiosResponse<Interest[]>>;
  abstract postInterest(userName:string,payload:any): Promise<AxiosResponse<Interest>>;
//   abstract getBlogPostByCategory(blogId: string, category: string): Promise<AxiosResponse<Post[]>>;
}