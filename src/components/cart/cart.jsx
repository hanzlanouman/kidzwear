import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import CartBody from './cartItems';

const Cart = () => {
  const navigate = useNavigate();

  return <CartBody />;
};

export default Cart;
