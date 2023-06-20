import React, { useContext, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../../contexts/Cart.context';
import BreadCrumbs from '../BreadCrumbs';
import ProductImageCarousel from './ProductImageCarousel';

const ProductDescription = () => {
  const location = useLocation();
  const { product } = location.state;
  const qtyRef = useRef(qtyRef);
  const [quantity, setQuantity] = useState(1);
  const { setCart } = useContext(CartContext);

  const updateCart = (product, qtyRef) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      const updatedCart = [...prevCart];

      if (existingItem) {
        existingItem.qty = qtyRef.current.value;
      } else {
        updatedCart.push({ ...product, qty: qtyRef.current.value });
      }

      return updatedCart;
    });
  };

  return (
    <div>
      <BreadCrumbs />
      <div className='flex flex-col sm:flex-row w-full'>
        <ProductImageCarousel image={product.image} />
        <div className='w-full md:w-1/2 ml-20'>
          <h1 className='text-4xl font-bold mt-8 mb-12'>{product.name}</h1>
          <p className='text-2xl text-teal-400 font-semibold mt-8 mb-12'>
            ${product.price.toFixed(2)}
          </p>
          <p className='text-xl mt-8 mb-12'>{product.description}</p>
          <div>
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
              className='bg-black text-white px-4 py-2 rounded-md mt-8 mb-12 text-center'
            >
              -
            </button>
            <span className='text-lg' ref={qtyRef}>
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className='bg-black text-white px-4 py-2 rounded-md mt-8 mb-12 text-center'
            >
              +
            </button>
          </div>
          <button
            className='bg-black text-white px-4 py-2 rounded-md mt-8 mb-12 text-center w-[16rem]'
            onClick={() => updateCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
