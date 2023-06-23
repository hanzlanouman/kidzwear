import axios from 'axios';

const url = 'http://localhost:5000';

export const addProducts = async (product) => {
  console.log(product);
  return axios.post(`${url}/add-product`, product);
};

export const getProducts = async () => {
  return axios.get(`${url}`);
};

export const signUp = async (user) => {
  return axios.post(`${url}/signup`, user);
};
