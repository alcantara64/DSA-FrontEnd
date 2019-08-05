import {LocationDataService} from "./location.data.service";
import { AxiosResponse } from "axios";
import axios from '../../axios.config';
import {injectable} from 'inversify';
import Location from "../../../Models/Location";

@injectable()
export class LocationMockService implements LocationDataService{

    getAllLocations(): Promise<AxiosResponse<Location[]>> {
            return axios.get<Location[]>('/bloglocation');
        }
}
