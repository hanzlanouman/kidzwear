import { useState } from 'react';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { jazzcash } from '../../Services/api';

const Jazzcash = () => {
  const [jcDetails, setJcDetails] = useState({
    mobileNo: '',
    pin: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    jazzcash(jcDetails);
  };

  return (
    <div className='flex justify-center mt-20 mb-20'>
      <Card color='transparent' shadow={false}>
        <Typography variant='h2' color='blue-gray' className='text-center'>
          Jazzcash Payment
        </Typography>
        <Typography color='gray' className='mt-1 font-normal'></Typography>
        <form
          className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
          onSubmit={handleSubmit}
        >
          <div className='mb-4 flex flex-col gap-6'>
            <Input
              size='lg'
              label='Jazzcash Mobile No'
              value={jcDetails.mobileNo}
              onChange={(e) =>
                setJcDetails({ ...jcDetails, mobileNo: e.target.value })
              }
            />
            <Input
              type='password'
              size='lg'
              label='PIN For Transaction'
              value={jcDetails.pin}
              onChange={(e) =>
                setJcDetails({ ...jcDetails, pin: e.target.value })
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
export default Jazzcash;
