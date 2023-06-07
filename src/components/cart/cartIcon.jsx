import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
const CartIcon = () => {
  const { qty } = useContext(CartContext);
  return (
    <Link to='/cart' className='ml-20 text-center'>
      <div>
        {
          <div className='rounded-full text-white w-8 h-8 text-center flex items-center justify-center'>
            <FontAwesomeIcon
              icon={faCartShopping}
              size='xl'
              style={{ color: '#333' }}
            />
            {qty > 0 && (
              <span className=' text-white bg-gray-700 rounded-full px-1 mb-5  text-xs'>
                {qty}
              </span>
            )}
          </div>
        }
      </div>
    </Link>
  );
};

export default CartIcon;
