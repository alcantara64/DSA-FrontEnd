import { RecommendationDataService } from "./recommendation.data.service";
import Option from "../../../Models/Option";
import { injectable } from "inversify";
import { AxiosResponse } from "axios";
import axios from '../../axios.config';

@injectable()
export class RecommendationWebService implements RecommendationDataService{

    getAllOptions(): Promise<AxiosResponse<Option[]>> {
        return axios.get<Option[]>('/questions/options');
    }
    
}
