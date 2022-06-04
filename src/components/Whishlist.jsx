import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
export const Whishlist = () => {
 const {count} = useContext(CartContext);
 return(
     <div>Whishlist:{count}</div>
 )
};
