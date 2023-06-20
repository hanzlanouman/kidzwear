import React from 'react';
// import { Card, CardHeader } from '@material-tailwind/react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import CollectionCard from './CollectionCard';

const OurCollections = () => {
  return (
    <Link to='/products' state={{ page: 'collection1' }}>
      <div className='mt-20 px-10'>
        <h1 className='text-4xl font-bold mt-8 text-center'>Our Collections</h1>
        <div className='mt-4 border-2 rounded-lg border-gray-800 w-[13rem] mb-12 mx-auto'></div>
        <div className='flex flex-col sm:flex-row justify-center mx-0 px-0'>
          <CollectionCard />
        </div>
      </div>
    </Link>
  );
};

export default OurCollections;
