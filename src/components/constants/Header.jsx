import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
const Header = () => {
  return (
    <div className='bg-gray-300 align-center justify-center'>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
