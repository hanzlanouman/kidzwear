import React from 'react';

const ProductDescription = ({ product }) => {
  return (
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
  );
};

export default ProductDescription;
