import axios from 'axios';
const api = axios.create({
  baseURL: 'http://10.171.1.19:3000/compras'
});
export default api;