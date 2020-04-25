import axios from 'axios';

const api = axios.create({
  baseURL: 'hhtps://api.github.com',
});

export default api;
