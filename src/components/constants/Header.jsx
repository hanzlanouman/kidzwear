import React from 'react';
import NavBar from './Navbar';
import Logo from './Logo';
const Header = () => {
  return (
    <div className='align-center justify-center'>
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
