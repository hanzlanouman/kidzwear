import axios from 'axios';

const url = 'https://kidz-wear-d0f7085cd29e.herokuapp.com';

// axios.get();

export const addProducts = async (product) => {
  return axios.post(`${url}/add-product`, product);
};

export const getProducts = async () => {
  return axios.get(`${url}`);
};
