import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`
  }
});

export default instance;
