import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';

export default function Login() {
  return (
    <div className='flex justify-center mt-20 '>
      <Card color='transparent' shadow={false}>
        <Typography variant='h4' color='blue-gray' className='text-center'>
          Login
        </Typography>
        <Typography color='gray' className='mt-1 font-normal'></Typography>
        <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
          <div className='mb-4 flex flex-col gap-6'>
            <Input size='lg' label='Email' />
            <Input type='password' size='lg' label='Password' />
          </div>

          <Button className='mt-6 bg-red-500' fullWidth>
            Log in
          </Button>
          <Typography color='gray' className='mt-4 text-center font-normal'>
            Don't have an account?{' '}
            <a
              href='#'
              className='font-medium text-blue-500 transition-colors hover:text-blue-700'
            >
              Sign up
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
