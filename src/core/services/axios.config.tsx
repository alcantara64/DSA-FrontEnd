import axios from 'axios';
import { Config } from '../../Config';

const instance = axios.create({
    baseURL: Config.isProd ? Config.baseUrl: Config.mockUrl,
  });

  export default instance;