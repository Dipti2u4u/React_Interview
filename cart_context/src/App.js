import React from "react";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import { CartProvider } from "./Context/CartContext";

const App = () => {
  const prodArray = [
    { id: 1, name: "Laptop", price: 2000 },
    { id: 2, name: "Mobile", price: 500 },
    { id: 3, name: "Pen", price: 200 },
  ];

  return (
    <CartProvider>
      <div>
        <h1>Simple Cart App</h1>
        {prodArray.map((item) => (
          <Product key={item.id} item={item} />
        ))}
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;





