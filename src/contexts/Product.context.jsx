import React from 'react';
import { createContext, useState } from 'react';
import STORE_DATA from '../STORE_DATA.json';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product] = useState(STORE_DATA);
  const value = { product };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
