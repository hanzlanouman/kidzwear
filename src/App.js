import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/constants/Header';
import Footer from './components/constants/Footer';
import Home from './components/constants/Home';
import ProductDescription from './components/ProductPage/ProductPage';
import ProductPage from './components/ProductsPage';
import Login from './components/forms/Login';
import SignUp from './components/forms/SignUp';
import Cart from './components/cart/cart';
import Featured from './components/Featured';
import ContactUs from './components/forms/ContactUs';
import CheckOut from './components/CheckOut';

const App = () => {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/product-description/:id'
          element={<ProductDescription />}
        />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='cart/check-out' element={<CheckOut />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
