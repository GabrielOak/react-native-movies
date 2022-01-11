import axios from "axios";
import { TOKEN } from '@env';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: { Authorization:  `Bearer ${TOKEN}` },
  timeout: 5000,
});

export default api;