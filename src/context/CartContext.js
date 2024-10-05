import React, { createContext, useState } from 'react';

const initialState = {
  cartItems: [],
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
