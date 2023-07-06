import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

export const getProducts = () => API.get('/');
export const addProducts = (newProduct) => API.post('/add-product', newProduct);
export const login = (formData) => API.post('/login', formData);
export const signUp = (formData) => API.post('/signup', formData);
export const easypaisa = (formData) => API.post('/payment/easypaisa', formData);
export const jazzcash = (formData) => API.post('/payment/jazzcash', formData);
