import React, { useState } from 'react';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    const loginDetails = {
      email: email,
      password: password,
    };

    handleLogin(loginDetails);
  };

  const handleLogin = (loginDetails) => {
    login(loginDetails)
      .then((response) => {
        // Handle successful login
        localStorage.setItem('token', response.data.token);
        console.log(localStorage.getItem('token')); 
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
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
            <Input
              size='lg'
              label='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type='password'
              size='lg'
              label='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button className='mt-6 bg-gray-900' fullWidth type='submit'>
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
