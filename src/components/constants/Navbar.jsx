// import React from 'react';
// import { Link } from 'react-router-dom';
// import CartIcon from '../cart/cartIcon';

// const Navbar = () => {
//   return (
//     <nav className='flex items-center justify-center py-5 '>
//       <div className='flex space-x-[8rem]'>
//         <Link to='/' activeClassName='bg-gray-800' exact>
//           Home
//         </Link>
//         <Link to='/products' activeClassName='bg-gray-800'>
//           Products
//         </Link>
//         <Link to='/featured' activeClassName='bg-gray-800'>
//           Featured
//         </Link>
//         <Link to='/contact-us' activeClassName='bg-gray-800'>
//           Contact Us
//         </Link>
//       </div>
//       <CartIcon />
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart/cartIcon';

const Navbar = () => {
  return (
    <nav className='flex flex-col sm:flex-row items-center justify-center py-4'>
      <div className='flex space-x-6 sm:space-x-[8rem] sm:justify-start'>
        <Link
          to='/'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-900'
          activeClassName='bg-gray-800'
          exact
        >
          Home
        </Link>
        <Link
          to='/products'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-800'
          activeClassName='bg-gray-800'
        >
          Products
        </Link>
        <Link
          to='/featured'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-800'
          activeClassName='bg-gray-800'
        >
          Featured
        </Link>
        <Link
          to='/contact-us'
          className='px-4 py-2 mx-2 sm:mx-0 hover:text-gray-800'
          activeClassName='bg-gray-800'
        >
          Contact Us
        </Link>
      </div>
      <CartIcon />
    </nav>
  );
};

export default Navbar;
