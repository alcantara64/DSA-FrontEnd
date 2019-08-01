import {InterestDataService} from "./Interest.data.service";
import { AxiosResponse } from "axios";
import Interest from "../../../Models/Interest";
import axios from '../../axios.config';
import {injectable} from 'inversify';

@injectable()
export class InterestMockService implements InterestDataService{


    getAllInterest(): Promise<AxiosResponse<Interest[]>> {
        return axios.get<Interest[]>('/');
    }
    
    getAllInterestByUser(userName: string): Promise<AxiosResponse<Interest[]>> {
        return axios.get<Interest[]>(`/interests?id=${userName}`);
    }

   postInterest(payload:any): Promise<AxiosResponse<Interest>>{
       return axios.post<Interest>(`/userinterest/`,payload)
   }

    // getBlogPostByCategory(blogId: string, category: string): Promise<AxiosResponse<Post[]>> {
    //     return axios.get<Post[]>(`/archive?id=${blogId}&category=${category}`);
    // }

}