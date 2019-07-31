import { AxiosResponse } from "axios";
import Interest from "../../../Models/Interest";
import axios from "../../axios.config";
import { injectable } from "inversify";
import { InterestDataService } from "./Interest.data.service";

@injectable()
export class InterestWebService implements InterestDataService {
  getAllInterest(): Promise<AxiosResponse<Interest[]>> {
    return axios.get<Interest[]>("http://localhost:53740/interests");
  }

  getAllInterestByUser(userName: string): Promise<AxiosResponse<Interest[]>> {
    return axios.get<Interest[]>(`http://localhost:53740/user/jdoe/interest`);
  }

  //   getPopularPost(blogId: string): Promise<AxiosResponse<Post>> {
  //     return axios.get<Post>(`/popular/${blogId}`);
  //   }

  //   getBlogPostByCategory(blogId: string, category: string): Promise<AxiosResponse<Post[]>> {
  //     return axios.get<Post[]>(`/archive?id=${blogId}&category=${category}`);
  //   }
}
