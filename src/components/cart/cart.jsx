import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, cartTotal, setCart, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className='px-4 py-8 sm:px-6 lg:px-8'>
      {cart.map((item) => (
        <div key={item.id} className='flex items-center mb-4'>
          <img src={item.image} alt={item.name} className='w-16 h-16 mr-4' />
          <div className='flex-grow'>
            <h1 className='text-lg font-semibold'>{item.name}</h1>
            <span className='text-gray-500'>Quantity: {item.qty}</span>
          </div>
          <Button color='red' className='ml-4'>
            Remove
          </Button>
        </div>
      ))}
      <h2 className='text-2xl font-semibold mt-8'>Total: ${cartTotal}</h2>
      <Button
        color='teal'
        onClick={(e) => navigate('./check-out')}
        className='mt-4'
      >
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
