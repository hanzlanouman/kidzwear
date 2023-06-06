import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/logo.png';

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
          to='/featured'
          className='px-10 py-4 hover:bg-gray-400 transition-colors duration-300'
        >
          Featured
        </Link>
        <Link
          to='/featured'
          className='px-10 py-4 hover:bg-gray-400 transition-colors duration-300'
        >
          Collection
        </Link>
        <Link
          to='/'
          className='px-10 py-4 hover:bg-gray-400 transition-colors duration-300'
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
