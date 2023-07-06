import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/constants/Header';
import Footer from './components/constants/Footer';
import Home from './components/constants/Home';
import ProductDescription from './components/ProductPage/ProductPage';
import ProductPage from './components/ProductsPage';
import Login from './components/forms/Login';
import SignUp from './components/forms/SignUp';
import Featured from './components/Featured';
import ContactUs from './components/forms/ContactUs';
import CheckOut from './components/CheckOut';
import AllProducts from './components/AllProducts';
import CartBody from './components/cart/cartBody';
import Payments from './components/forms/Payments';

import AddProduct from './components/admin/AddProduct';
import Easypaisa from './components/forms/Easypaisa';
import Jazzcash from './components/forms/Jazzcash';

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
        <Route path='/cart' element={<CartBody />} />
        <Route path='/featured' element={<Featured />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/payment' element={<Payments />} />
        <Route path='/payment/easypaisa' element={<Easypaisa />} />
        <Route path='payment/jazzcash' element={<Jazzcash />} />

        <Route path='/add-product' element={<AddProduct />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
