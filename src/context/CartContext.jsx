import React, { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";



export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const {isAuthorized}=useContext(AuthContext)
  const [count, setCount] = useState(0);
  const addToCart=()=>{
  setCount(count+1)
  }

  const buy=()=>{
    if(isAuthorized){
      console.log("can buy");
    }else{
      console.log("can not buy without loggin");
    }
  }
  return (
    <CartContext.Provider
      value={{
        count,
        addToCart,
        buy
      
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
