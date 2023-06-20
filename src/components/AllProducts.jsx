import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/Product.context';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';

const AllProducts = () => {
  const location = useLocation();
  let { page } = location.state || {};
  const { product } = useContext(ProductContext);

  if (page === null || page === undefined) {
    page = 'All Products';
  }

  return (
    <div className='mb-20'>
      <h1 className='text-4xl font-semibold text-center my-14'>{page}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-20 px-0'>
        {product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
