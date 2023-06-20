import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ProductImageCarousel from './ProductImageCarousel';
import { CartContext } from '../../contexts/Cart.context';
import MoreDescription from './MoreDescription';
import { Select, Option } from '@material-tailwind/react';
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
      <div className='flex flex-col mb-20 mt-0 sm:flex-row w-full'>
        <ProductImageCarousel allImages={product.allImages} />
        <div className='w-full md:w-1/2 ml-20'>
          <h1 className='text-4xl font-bold mt-8 mb-12'>{product.name}</h1>
          <p className='text-2xl text-teal-400 font-semibold mt-8 mb-12'>
            Rs. {product.price.toFixed(2)}
          </p>
          <p className='text-xl  mt-8 mb-12'>{product.description}</p>
          <div>
            <div className='w-72'>
              <Select label='Select Size'>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </div>
          </div>
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
            <span ref={qtyRef} className=' text-lg'>
              {' '}
              {quantity}{' '}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className='bg-black text-white px-4 py-2 rounded-md mt-8 mb-12 text-center'
            >
              +
            </button>
          </div>
          <button
            className='bg-black text-white px-4 py-2 rounded-md mt-8 mb-12 text-center w-[20rem]'
            onClick={(e) => updateCart(product, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <MoreDescription />
    </div>
  );
};

export default ProductDescription;
