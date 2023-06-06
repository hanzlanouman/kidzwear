import React from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../BreadCrumbs';
import ProductImageCarousel from './ProductImageCarousel';
import MainCarousel from '../MainCarousel';
const ProductDescription = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div cl>
      <BreadCrumbs />

      <div className='flex flex-col md:flex-row'>
        <ProductImageCarousel />
        <div className='w-full md:w-1/2'>
          <h1 className='text-4xl font-bold mt-8 mb-12 text-center'>
            {product.name}
          </h1>
          <p className='text-2xl font-bold mt-8 mb-12 text-center'>
            ${product.price.toFixed(2)}
          </p>
          <p className='text-2xl font-bold mt-8 mb-12 text-center'>
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
