import { RecommendationDataService } from "./recommendation.data.service";
import Option from "../../../Models/Option";
import { injectable } from "inversify";
import { AxiosResponse } from "axios";
import axios from '../../axios.config';
import Recommendation from "../../../Models/Recommendation";

@injectable()
export class RecommendationMockService implements RecommendationDataService{

    getAllOptions(): Promise<AxiosResponse<Option[]>> {
        return axios.get<Option[]>('/questions/options');
    }
    getRecommendations(option: string){
        let url = `${option}/recommendations`
        return axios.get<Recommendation[]>(url);
    }
}
