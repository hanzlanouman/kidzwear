import React from 'react';
import NavBar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <div className='mt-4'>
      <div className='w-full flex-col items-center justify-between'>
        <Logo />
        <div className='mt-5 border-t border-gray-500 w-full'></div>
        <NavBar />
        <div className='mt-5 border-t border-gray-400 w-full'></div>
      </div>
    </div>
  );
};

export default Header;
