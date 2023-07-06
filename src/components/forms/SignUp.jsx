import React, { useState } from 'react';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { signUp } from '../../Services/api';

export default function SignUp() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);
    signUp(user);
  };

  return (
    <div className='flex justify-center mt-20 mb-20'>
      <Card color='transparent' shadow={false}>
        <Typography variant='h4' color='blue-gray'>
          Sign Up
        </Typography>
        <Typography color='gray' className='mt-1 font-normal'>
          Enter your details to register.
        </Typography>
        <form
          className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
          onSubmit={submitHandler}
        >
          <div className='mb-4 flex flex-col gap-6'>
            <Input
              size='lg'
              label='Name'
              name='name'
              value={user.name}
              onChange={handleChange}
            />
            <Input
              size='lg'
              label='Email'
              name='email'
              value={user.email}
              onChange={handleChange}
            />
            <Input
              type='password'
              size='lg'
              label='Password'
              name='password'
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant='small'
                color='gray'
                className='flex items-center font-normal'
              >
                I agree the
                <Link
                  href='#'
                  className='font-medium transition-colors hover:text-blue-500'
                >
                  &nbsp;Terms and Conditions
                </Link>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          <Button className='mt-6 bg-gray-900' fullWidth type='submit'>
            Register
          </Button>
          <Typography color='gray' className='mt-4 text-center font-normal'>
            Already have an account?{' '}
            <Link
              to='/login'
              className='font-medium text-blue-500 transition-colors hover:text-blue-700'
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
