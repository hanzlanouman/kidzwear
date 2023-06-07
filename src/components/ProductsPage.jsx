import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/Product.context';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';
const ProductPage = () => {
  // const location = useLocation();
  // let { page } = location.state;
  const { product } = useContext(ProductContext);
  // if (page === null || page === undefined) {
  //   page = 'All Products';
  // }
  return (
    <div>
      {/* <h1 className='text-3xl'>{page}</h1> */}
      <div className='grid grid-cols-4 gap-x-4 gap-y-20 px-0'>
        {product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
