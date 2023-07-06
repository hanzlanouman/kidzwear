import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from '../cart/cartIcon';

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('token');
  return user ? (
    <nav className='flex flex-col sm:flex-row items-center justify-center py-4'>
      <div className='flex space-x-1 sm:space-x-[6rem] sm:justify-start'>
        <Link
          to='/'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-900 text-l sm:text-xl'
          activeClassName='bg-gray-800'
          exact
        >
          Home
        </Link>
        <Link
          to='/all-products'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-800 text-l sm:text-xl'
          activeClassName='bg-gray-800'
        >
          Products
        </Link>
        <Link
          to='/featured'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-800 text-l sm:text-xl'
          activeClassName='bg-gray-800'
        >
          Featured
        </Link>
        <Link
          to='/contact-us'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-800 text-l sm:text-xl'
          activeClassName='bg-gray-800'
        >
          Contact Us
        </Link>
        <CartIcon />
        <FontAwesomeIcon
          icon={faUser}
          size='xl mt-1'
          style={{ color: '#333' }}
          onClick={(e) => navigate('/login')}
          cursor={'pointer'}
        />

        <Link to='/add-product'>Add Products</Link>
      </div>
    </nav>
  ) : (
    <nav className='flex flex-col sm:flex-row items-center justify-center py-4'>
      <div className='flex space-x-1 sm:space-x-[6rem] sm:justify-start'>
        <Link
          to='/'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-900 text-l sm:text-xl'
          activeClassName='bg-gray-800'
          exact
        >
          Home
        </Link>
        <Link
          to='/all-products'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-800 text-l sm:text-xl'
          activeClassName='bg-gray-800'
        >
          Products
        </Link>
        <Link
          to='/featured'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-800 text-l sm:text-xl'
          activeClassName='bg-gray-800'
        >
          Featured
        </Link>
        <Link
          to='/contact-us'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-800 text-l sm:text-xl'
          activeClassName='bg-gray-800'
        >
          Contact Us
        </Link>
        <CartIcon />
        <FontAwesomeIcon
          icon={faUser}
          size='xl mt-1'
          style={{ color: '#333' }}
          onClick={(e) => navigate('/login')}
          cursor={'pointer'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
