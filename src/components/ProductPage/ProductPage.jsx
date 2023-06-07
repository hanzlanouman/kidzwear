import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import BreadCrumbs from '../BreadCrumbs';
import ProductImageCarousel from './ProductImageCarousel';
import { CartContext } from '../../contexts/Cart.context';
import Cart from '../cart/cart';
const ProductDescription = () => {
  const location = useLocation();
  const { product } = location.state;
  const [quantity, setQuantity] = React.useState(1);
  const updateCart = (product, quantity) => {
    setCart(product);
  };
  const { setCart } = useContext(CartContext);
  const qtyRef = React.useRef(quantity);
  return (
    <div>
      <BreadCrumbs />
      <div className='flex flex-col md:flex-row'>
        <ProductImageCarousel image={product.image} />
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
          <div>
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </button>
            <span ref={qtyRef}> {quantity} </span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button
            className='bg-black text-white px-4 py-2 rounded-md mt-8 mb-12 text-center'
            onClick={(e) => updateCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
