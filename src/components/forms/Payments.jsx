import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payments = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-center my-20'>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10'
        onClick={(e) => navigate('/payment/easypaisa')}
      >
        Easypaisa
      </button>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10'
        onClick={(e) => navigate('/payment/jazzcash')}
      >
        Jazzcash
      </button>
    </div>
  );
};

export default Payments;
