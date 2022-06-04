import React from 'react'
import { Whishlist } from './Whishlist'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const {isAuthorized,login,logout} =useContext(AuthContext);
    const {buy} =useContext(CartContext);
    const {isLight,toggleTheme} = useContext(ThemeContext);
  return (
    <div>Navbar
        <button onClick={()=>{
        if(isAuthorized) logout();
    else login ("R","Z");
        }}
        >
            {isAuthorized? "Logout" : "Login"}
        </button>
<button onClick={buy}>Buy</button>
<button onClick={toggleTheme}>{`Make ${isLight ? "Dark" : "Light"}`}</button>
       {isAuthorized && <Whishlist/>} 
    </div>
    
  )
}
