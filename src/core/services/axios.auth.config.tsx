import axios from 'axios';
import { Config } from '../../Config';

const instance = axios.create({
    baseURL: !Config.isProd ? Config.authUrl: Config.authMockUrl,
  });

  export default instance;