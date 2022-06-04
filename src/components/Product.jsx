import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Cart } from './Cart'
export const Product = () => {
    const {isAuthorized}=useContext(AuthContext);
    // const {isAuthorized}=useContext(AuthContext);
  return (
    <div>

        Product:{isAuthorized ? "LoggedIN":"LoggedOut"}
        
        <Cart/>
    </div>
  )
}
