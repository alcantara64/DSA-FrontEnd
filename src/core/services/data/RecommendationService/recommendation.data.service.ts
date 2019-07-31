import { AxiosResponse } from "axios";
import { injectable } from 'inversify';
import Option from "../../../Models/Option";

@injectable()
export abstract class RecommendationDataService {
  abstract getAllOptions(): Promise<AxiosResponse<Option[]>>;
}