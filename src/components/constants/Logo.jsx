import React from 'react';
import logo from '../../resources/logo.png';
import { Link } from 'react-router-dom';
const Logo = () => (
  <Link to='/'>
    <div className='flex items-center justify-center'>
      <img src={logo} alt='logo' className='h-20 mb-5' />
    </div>
  </Link>
);

export default Logo;
