import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useState } from 'react';

const Sale = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'https://picsum.photos/1280/720',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://picsum.photos/1280/720',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 200,
      image: 'https://picsum.photos/1280/720',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 200,
      image: 'https://picsum.photos/1280/720',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
  ];
  const [products, setProducts] = useState(featuredProducts);

  return (
    <div className='mt-20 px-12'>
      <h1 className='text-4xl font-bold mt-8 mb-12 text-center'>Sale</h1>
      <div className='flex justify-between flex-wrap px-1'>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Sale;
