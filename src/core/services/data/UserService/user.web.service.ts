import { AxiosResponse } from "axios";
import User from "../../../Models/User";
import axios from '../../axios.auth.config';
import {injectable} from 'inversify';
import { UserDataService } from "./user.data.service";

const options = {
    headers: {'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'X',
    'observe': 'response'}
  };

@injectable()
export class UserWebService implements UserDataService {

    
    getCurrentUser(): Promise<AxiosResponse<User>> {
        return axios.get<User>(`/api/user`, options);
    }

}