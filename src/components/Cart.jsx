import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


export const Cart = () => {
  const {count,setCount} = useContext(CartContext)
  return (
    <div>Cart
      <button onClick={()=>setCount(count+1)}>add to cart</button>
    </div>
  )
}
