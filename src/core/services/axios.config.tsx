import axios from 'axios';
import { Config } from '../../Config';

const instance = axios.create({
    baseURL: !Config.isProd ? 'http://bis.southcentralus.cloudapp.azure.com:8090/xom-dsa-backend': Config.mockUrl,
  });

  export default instance;