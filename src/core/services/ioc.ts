import { Container } from 'inversify';
import {BlogMockService} from './data/BlogService/blog.mock.service';
import {BlogService} from './data/BlogService/blog.data.service';
import { TYPES } from './ioc.types';

export const container = new Container();

container.bind<BlogService>('blogMockService').to(BlogMockService);