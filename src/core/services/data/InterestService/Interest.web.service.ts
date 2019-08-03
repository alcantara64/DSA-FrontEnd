import { AxiosResponse } from "axios";
import Interest from "../../../Models/Interest";
import axios from "../../axios.config";
import { injectable } from "inversify";
import { InterestDataService } from "./Interest.data.service";

@injectable()
export class InterestWebService implements InterestDataService {
  getAllInterest(userName:string): Promise<AxiosResponse<Interest[]>> {
    return axios.get<Interest[]>(`user/${userName}/interest`);
  }

  getAllInterestByUser(userName: string): Promise<AxiosResponse<Interest[]>> {
    return axios.get<Interest[]>(`/user/${userName}/userinterest`);
  }

   postInterest(userName:string,payload:any): Promise<AxiosResponse<Interest>>{
       return axios.post<Interest>(`${userName}/userinterest/`,payload)
   }

  //   getBlogPostByCategory(blogId: string, category: string): Promise<AxiosResponse<Post[]>> {
  //     return axios.get<Post[]>(`/archive?id=${blogId}&category=${category}`);
  //   }
}
