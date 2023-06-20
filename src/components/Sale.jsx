import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useState, useContext } from 'react';
import { ProductContext } from '../contexts/Product.context';

const Sale = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className='mt-10 px-12 '>
      <h1 className='text-4xl font-bold mt-2 mb-2 text-center'>Sale</h1>
      <div className='mt-4 border-2 rounded-lg border-gray-800 w-12 mb-12 mx-auto'></div>
      <div className='flex justify-between flex-wrap px-1'>
        {product.map(
          (product) => product.sale && <ProductCard product={product} />
        )}
      </div>
    </div>
  );
};

export default Sale;
