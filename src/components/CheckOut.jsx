import CartItems from './cart/cartItems';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  // const { cart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className='my-10 px-14 m-auto'>
        <h1 className='text-2xl font-semibold mt-4'>Checkout</h1>
        <h2 className='text-xl font-bold my-5'>Your Cart</h2>
        <CartItems />
      </div>
      <div className='flex justify-end px-14 m-auto'>
        <Button
          className='py-4 w-[10rem] rounded-none bg-gray-900'
          onClick={() => navigate('/payment')}
        >
          Proceed to pay
        </Button>
      </div>
    </div>
  );
};

export default CheckOut;
