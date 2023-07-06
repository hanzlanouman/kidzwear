import React, { useEffect, useReducer, useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const updateCart = (cart, item) => {
    const itemInCart = cart.find((i) => i.id === item.id);
    if (itemInCart) {
      return cart.map((i) => {
        if (i.id === item.id) {
          return { ...i, qty: i.qty + 1 };
        }
        return i;
      });
    }
    return [...cart, { ...item, qty: 1 }];
  };

  const removeItem = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((i) => i.id !== item.id);
      return updatedCart;
    });
  };

  const [cart, setCart] = useReducer(updateCart, []);
  const [qty, setQty] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const qty = cart.reduce((acc, item) => acc + item.qty, 0);
    setQty(qty);
  }, [cart]);
  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
    setCartTotal(total);
  }, [cart]);

  
  const value = { cart, setCart, qty, cartTotal, removeItem };


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
