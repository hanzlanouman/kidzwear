import React, { useRef } from 'react';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    console.log('Email:', emailValue);
    console.log('Password:', passwordValue);
  };

  return (
    <div className='flex justify-center mt-20 mb-20'>
      <Card color='transparent' shadow={false}>
        <Typography variant='h2' color='blue-gray' className='text-center'>
          Login
        </Typography>
        <Typography color='gray' className='mt-1 font-normal'></Typography>
        <form
          className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
          onSubmit={submitHandler}
        >
          <div className='mb-4 flex flex-col gap-6'>
            <Input size='lg' label='Email' ref={emailRef} />
            <Input
              type='password'
              size='lg'
              label='Password'
              ref={passwordRef}
            />
          </div>

          <Button className='mt-6 bg-gray-900' fullWidth>
            Log in
          </Button>
          <Typography color='gray' className='mt-4 text-center font-normal'>
            Don't have an account?{' '}
            <Link
              to='/signup'
              className='font-medium text-blue-500 transition-colors hover:text-blue-700'
            >
              Sign up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
