import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://bis.southcentralus.cloudapp.azure.com:8090/xom-dsa-backend',
    timeout: 5000,
  });

  export default instance;