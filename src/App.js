// import logo from './logo.svg';
import './App.css';
import React, {useReducer} from "react";
// import { useContext } from 'react';
import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
// import { ThemeContext } from './context/ThemeContext';
// import { CartProvider } from './context/CartContext';

const reducer = (state,action)=>{
  switch (action.type){
    case "INCREMENT":{
      return state + action.payload;
    }
    case "DECREMENT":{
      return state - action.payload;



    }
    default:{
      console.log("Type incorrect", action.type);
    }
  }
}
function App() {
  const [counter, dispatch] = useReducer(reducer,0);
  return (
    <div className="App">
      {/* <CartProvider> */}
      <Navbar/>
      <Body/>
      {/* </CartProvider> */}
     
     Counter:{counter}
     <div>
       <button onClick={()=>dispatch({
         type: "DECREMENT",payload:1
         })}>-</button>
       <button onClick={()=>dispatch({
         type: "INCREMENT",payload:1
         })}>+</button>
     </div>
    </div>
  );
}

export default App;
