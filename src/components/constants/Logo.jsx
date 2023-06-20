import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/logo.svg';

const Logo = () => (
  <Link to='/'>
    <div className='flex items-center justify-center mt-4'>
      <img src={logo} alt='logo' className='h-12' />
    </div>
  </Link>
);

export default Logo;
