import { AxiosResponse } from "axios";
import { injectable } from 'inversify';
import Option from "../../../Models/Option";
import Recommendation from "../../../Models/Recommendation";

@injectable()
export abstract class RecommendationDataService {
  abstract getAllOptions(): Promise<AxiosResponse<Option[]>>;
  abstract getRecommendations(optionCode: string): Promise<AxiosResponse<Recommendation[]>>;
}