import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { qty } = useContext(CartContext);

  return (
    <Link to='/cart'>
      <div>
        {qty > 0 && (
          <div className='bg-red-200 rounded-full text-white w-8 h-8 text-center flex items-center justify-center'>
            {qty}
          </div>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
