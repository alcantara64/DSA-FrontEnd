import { AxiosResponse } from "axios";
import User from "../../../Models/User";
import { injectable } from 'inversify';

@injectable()
export abstract class UserDataService {
  abstract getCurrentUser(): Promise<AxiosResponse<User>>;
}