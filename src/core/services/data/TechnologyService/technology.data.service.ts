import { AxiosResponse } from "axios";
import { injectable } from 'inversify';
import Technology from "../../../Models/Technology";

@injectable()
export abstract class TechnologyDataService {
  abstract getAllTechnologies(): Promise<AxiosResponse<Technology[]>>;
}