import axios from 'axios';
import { Config } from '../../Config';

const instance = axios.create({
    baseURL: !Config.isProd ? 'http://192.168.197.233/dsa-backend': Config.mockUrl,
  });

  export default instance;