import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import { Button } from '@material-tailwind/react';

const CartItems = () => {
  const { cart, cartTotal, setCart, removeItem } = useContext(CartContext);
  const handleRemoveItem = (item) => {
    removeItem(item);
  };

  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className='flex items-center mb-4'>
          <img src={item.image} alt={item.name} className='w-16 h-16 mr-4' />
          <div className='flex-grow'>
            <h1 className='text-lg font-semibold'>{item.name}</h1>
            <span className='text-gray-500'>Quantity: {item.qty}</span>
          </div>
          <Button
            className='ml-4 bg-red-500'
            onClick={() => handleRemoveItem(item)}
          >
            Remove
          </Button>
        </div>
      ))}
      <div className='mt-5 border-t border-gray-500 w-full'></div>
      <h2 className='text-2xl  mt-8 text-right'>Cart Total: Rs. {cartTotal}</h2>
    </>
  );
};

export default CartItems;
