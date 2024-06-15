import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Product = (items) => {

    const {addToCart} = useContext(CartContext)

    const handleaddToCart = ()=>{
        addToCart(items)
    }
  return (
    <>
        <h2>Item: {items.Name}</h2>
        <p>Rs: {items.Price}</p>
        <button onClick={handleaddToCart}>Add To Cart</button>
    </>
  )
}

export default Product



