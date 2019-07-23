import { RecommendationDataService } from "./recommendation.data.service";
import Recommendation from "../../../Models/Recommendation";
import { injectable } from "inversify";
import { AxiosResponse } from "axios";
import axios from '../../axios.config';

@injectable()
export class RecommendationMockService implements RecommendationDataService{

    getAllOptions(): Promise<AxiosResponse<Recommendation[]>> {
        return axios.get<Recommendation[]>('/RecommendationQuestion');
    }
    
}
