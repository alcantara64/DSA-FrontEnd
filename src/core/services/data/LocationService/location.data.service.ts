import { AxiosResponse } from "axios";
import { injectable } from 'inversify';
import Location from "../../../Models/Location";

@injectable()
export abstract class LocationDataService {
  abstract getAllLocations(): Promise<AxiosResponse<Location[]>>;
}