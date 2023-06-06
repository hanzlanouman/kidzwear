import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/constants/Header';
import Footer from './components/constants/Footer';
import Home from './components/Home';
import ProductDescription from './components/ProductPage/ProductPage';

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
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
