import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/logo.png';
import Cart from '../cart/cart';
import CartIcon from '../cart/cartIcon';

const Navbar = () => {
  return (
    <div className='flex items-center justify-center px-[5rem]'>
      <div className='flex space-x-4'>
        <Link
          to='/'
          className='px-10 py-4 hover:bg-gray-400 transition-colors duration-300'
        >
          Home
        </Link>
        <Link
          to='/products'
          className='px-10 py-4 hover:bg-gray-400 transition-colors duration-300'
        >
          Products
        </Link>
        <Link
          to='/featured'
          className='px-10 py-4 hover:bg-gray-400 transition-colors duration-300'
        >
          Featured
        </Link>
        <Link
          to='/contact-us'
          className='px-10 py-4 hover:bg-gray-400 transition-colors duration-300'
        >
          Contact Us
        </Link>
      </div>
      <CartIcon />
    </div>
  );
};

export default Navbar;
