import React, { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cart, cartTotal, setCart, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} width='200px' />
          <span>{item.qty}</span>
          <br />
          <Button color='red' onClick={(e) => removeItem(item)}>
            Remove
          </Button>
        </div>
      ))}
      <h2>{cartTotal}</h2>
      <Button color='teal' onClick={(e) => navigate('./check-out')}>
        Checkout
      </Button>
    </div>
  );
};

export default Cart;
