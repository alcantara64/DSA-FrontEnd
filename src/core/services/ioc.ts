import { Container } from 'inversify';
import {BlogMockService} from './data/BlogService/blog.mock.service';
import {BlogWebService} from './data/BlogService/blog.web.service';
import {BlogDataService} from './data/BlogService/blog.data.service';
import {InterestDataService} from './data/InterestService/Interest.data.service';
import {InterestWebService} from './data/InterestService/Interest.web.service';
import {InterestMockService} from './data/InterestService/interest.mock.service';
import { TYPES } from './ioc.types';
import { Config } from '../../Config';
import { RecommendationDataService } from './data/RecommendationService/recommendation.data.service';
import { RecommendationMockService } from './data/RecommendationService/recommendation.mock.service';
import { LocationDataService } from './data/LocationService/location.data.service';
import { LocationMockService } from './data/LocationService/location.mock.service';
import { TechnologyDataService } from './data/TechnologyService/technology.data.service';
import { TechnologyMockService } from './data/TechnologyService/technology.mock.service';
import { LocationWebService } from './data/LocationService/location.web.service';
import { TechnologyWebService } from './data/TechnologyService/techology.web.service';
import { UserWebService } from './data/UserService/user.web.service';
import { UserDataService } from './data/UserService/user.data.service';
import { UserMockService } from './data/UserService/user.mock.service';

export const container = new Container();
if(Config.isProd){
    container.bind<BlogDataService>(TYPES.BlogService).to(BlogWebService);
    container.bind<RecommendationDataService>(TYPES.RecommendationService).to(RecommendationMockService);
    container.bind<InterestDataService>(TYPES.InterestService).to(InterestWebService);
    container.bind<LocationDataService>(TYPES.LocationService).to(LocationWebService);
    container.bind<TechnologyDataService>(TYPES.TechnologyService).to(TechnologyWebService);
    container.bind<UserDataService>(TYPES.UserService).to(UserMockService);
}else{
    container.bind<BlogDataService>(TYPES.BlogService).to(BlogMockService);
    container.bind<RecommendationDataService>(TYPES.RecommendationService).to(RecommendationMockService);
    container.bind<InterestDataService>(TYPES.InterestService).to(InterestMockService);
    container.bind<LocationDataService>(TYPES.LocationService).to(LocationMockService);
    container.bind<TechnologyDataService>(TYPES.TechnologyService).to(TechnologyMockService);
    container.bind<UserDataService>(TYPES.UserService).to(UserWebService);
}
