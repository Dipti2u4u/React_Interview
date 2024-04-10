import React from "react";
import { useCart } from "../Context/CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

