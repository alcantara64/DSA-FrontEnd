import {TechnologyDataService} from "./technology.data.service";
import { AxiosResponse } from "axios";
import axios from '../../axios.config';
import {injectable} from 'inversify';
import Technology from "../../../Models/Technology";

@injectable()
export class TechnologyMockService implements TechnologyDataService{

    getAllTechnologies(): Promise<AxiosResponse<Technology[]>> {
            return axios.get<Technology[]>('/technology');
        }
}
