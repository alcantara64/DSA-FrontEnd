import { Container } from 'inversify';
import {BlogMockService} from './data/BlogService/blog.mock.service';
import {BlogWebService} from './data/BlogService/blog.web.service';
import {BlogDataService} from './data/BlogService/blog.data.service';
import { TYPES } from './ioc.types';
import { Config } from '../../Config';
import { RecommendationDataService } from './data/RecommendationService/recommendation.data.service';
import { RecommendationMockService } from './data/RecommendationService/recommendation.mock.service';

export const container = new Container();
if(Config.isProd){
    container.bind<BlogDataService>(TYPES.BlogService).to(BlogWebService);
    container.bind<RecommendationDataService>(TYPES.RecommendationService).to(RecommendationMockService);
}else{
    container.bind<BlogDataService>(TYPES.BlogService).to(BlogMockService);
    container.bind<RecommendationDataService>(TYPES.RecommendationService).to(RecommendationMockService);
}
