import React from 'react';

const BreadCrumbs = () => {
  return (
    <div>
      <div className='flex h-10 mt-10'>
        <div className='flex space-x-2'>
          <p className='text-2xl font-bold'>Home</p>
          <p className='text-2xl font-bold'>/</p>
          <p className='text-2xl font-bold'>Featured</p>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumbs;
