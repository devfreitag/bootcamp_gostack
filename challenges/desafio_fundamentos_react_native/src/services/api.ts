import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.202:3333',
});

export default api;
