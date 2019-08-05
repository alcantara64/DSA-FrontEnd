import {UserDataService} from "./user.data.service";
import { AxiosResponse } from "axios";
import User from "../../../Models/User";
import axios from '../../axios.auth.config';
import {injectable} from 'inversify';

@injectable()
export class UserMockService implements UserDataService{
    getCurrentUser(): Promise<AxiosResponse<User>> {
        return axios.get<User>('user.json');
    }
}