import React from "react";
import { useCart } from "../Context/CartContext";

const Product = ({ item }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  return (
    <div>
      <h3>item : {item.name} <br /> Rs:{item.price}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
