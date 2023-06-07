import { createContext, useEffect, useReducer, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const updateCart = (cart, item, qty) => {
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

  const [cart, setCart] = useReducer(updateCart, []);
  const [qty, setQty] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // get the length of the cart and set it to qty
    const qty = cart.reduce((acc, item) => acc + item.qty, 0);
    setQty(qty);
  }, [cart]);
  useEffect(() => {
    // get the total of the cart and set it to cartTotal
    const total = cart.reduce((acc, item) => acc + item.qty * item.price, 0);
    setCartTotal(total);
  }, [cart]);
  const value = { cart, setCart, qty, cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
