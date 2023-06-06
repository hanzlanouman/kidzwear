import React from 'react';
import MainCarousel from './MainCarousel';
import Featured from './Featured';
import OurCollections from './OurCollections';
import Sale from './Sale';

const Home = () => {
  return (
    <div className=''>
      <MainCarousel />
      <OurCollections />
      <Featured />
      <Sale />
    </div>
  );
};

export default Home;
