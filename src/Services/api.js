import axios from 'axios';

const url = 'https://kidz-wear-d0f7085cd29e.herokuapp.com';

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
