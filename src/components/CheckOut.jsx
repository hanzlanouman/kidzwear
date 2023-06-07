import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../contexts/Cart.context';
const CheckOut = () => {
  const { cart, setCart, cartTotal, setTotal } = useContext(CartContext);
  return (
    <div>
      {cart.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} width='200px' />
          <span>{item.qty}</span>
          <br />
        </div>
      ))}
      <h2>{cartTotal}</h2>
    </div>
  );
};

export default CheckOut;
