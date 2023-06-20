import React from 'react';
import CartItems from './cartItems';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const CartBody = () => {
  const navigate = useNavigate();

  return (
    <div className='px-4 py-8 sm:px-6 lg:px-8 border border-gray-800 rounded-xl mt-2 mb-2 w-[80%] mx-auto'>
      <div className='flex flex-col justify-between'>
        <CartItems />
        <div className='flex justify-end'>
          <Button
            onClick={(e) => navigate('/checkout')}
            className='rounded-none bg-gray-900 mt-5'
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
