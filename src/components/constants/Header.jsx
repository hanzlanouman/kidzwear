import React from 'react';
import NavBar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
    <div className='mt-0 top-0 sticky bg-white z-10  '>
      <div className='w-full flex-col items-center justify-between hide-mobile'>
        <Logo />
        <div className='mt-5 border-t border-gray-500 w-full'></div>
        <div>
          <NavBar />
        </div>
        <div className=' border-t border-gray-400 w-full'></div>
      </div>
    </div>
  );
};

export default Header;
