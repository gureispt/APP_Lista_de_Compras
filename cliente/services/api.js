import axios from 'axios';
const api = axios.create({
  baseURL: 'http://192.169.0.116:3000/compras'
});
export default api;