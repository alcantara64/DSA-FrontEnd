import { AxiosResponse } from "axios";
import { injectable } from 'inversify';
import Recommendation from "../../../Models/Recommendation";

@injectable()
export abstract class RecommendationDataService {
  abstract getAllOptions(): Promise<AxiosResponse<Recommendation[]>>;
}