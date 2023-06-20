import React from 'react';
import ProductCard from './ProductCard';
import { useState } from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/Product.context';
const Featured = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className='mt-20 px-12 mb-20'>
      <h1 className='text-4xl font-bold mt-8 text-center'>Featured</h1>
      <div className='mt-3 border-2 rounded-lg border-gray-800 w-[8rem] mb-12 mx-auto'></div>
      <div className='flex flex-wrap justify-center md:justify-around  '>
        {product.map(
          (product) => product.featured && <ProductCard product={product} />
        )}
      </div>
    </div>
  );
};
export default Featured;
