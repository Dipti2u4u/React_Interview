import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const MyCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  return (
    <>
      <h2>My Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.Name} Rs: {item.Price}
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyCart;

