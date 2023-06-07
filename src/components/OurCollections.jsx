import React from 'react';
import { Card, CardHeader } from '@material-tailwind/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CollectionCard from './CollectionCard';
const OurCollections = () => {
  const [collections, setCollections] = useState([
    'https://picsum.photos/1900/1000',
    'https://picsum.photos/1900/1000',
  ]);
  return (
    <Link to='/products' state={{ page: 'collection1' }}>
      <div className='mt-20 px-10'>
        <h1 className='text-4xl font-bold mt-8 mb-12 text-center'>
          Our Collections
        </h1>
        <div className='flex justify-center '>
          <CollectionCard collections={collections} />
        </div>
      </div>
    </Link>
  );
};

export default OurCollections;
