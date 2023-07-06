import React, { useState } from 'react';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { easypaisa } from '../../Services/api';

const Easypaisa = () => {
  const [epDetails, setEpDetails] = useState({
    mobileNo: '',
    pin: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    easypaisa(epDetails);
  };

  return (
    <div className='flex justify-center mt-20 mb-20'>
      <Card color='transparent' shadow={false}>
        <Typography variant='h2' color='blue-gray' className='text-center'>
          Easypaisa Payment
        </Typography>
        <Typography color='gray' className='mt-1 font-normal'></Typography>
        <form
          className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
          onSubmit={handleSubmit}
        >
          <div className='mb-4 flex flex-col gap-6'>
            <Input
              size='lg'
              label='Easypaisa Mobile No'
              value={epDetails.mobileNo}
              onChange={(e) =>
                setEpDetails({ ...epDetails, mobileNo: e.target.value })
              }
            />
            <Input
              type='password'
              size='lg'
              label='PIN For Transaction'
              value={epDetails.pin}
              onChange={(e) =>
                setEpDetails({ ...epDetails, pin: e.target.value })
              }
            />
          </div>

          <Button className='mt-6 bg-gray-900' fullWidth type='submit'>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Easypaisa;
