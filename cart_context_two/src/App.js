import React from "react";
import Product from "./Components/Product";
import MyCart from "./Components/MyCart.jsx";

const App = () => {
  return (
    <>
      <Product id={1} Name="Mac book" Price={5000} />
      <Product id={2} Name="i Pad" Price={3000} />
      <Product id={3} Name="Speaker" Price={1000} />
      <MyCart />
    </>
  );
};

export default App;

