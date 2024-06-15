import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (items) => {
    setCartItems([...cartItems, items]);
  };

  const removeFromCart = (itemId) =>{
      setCartItems(cartItems.filter((item)=> item.id !== itemId))
  }
   return (
    <CartContext.Provider value={{ cartItems, addToCart ,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};


