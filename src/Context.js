// import {createContext} from  "react";

// export const CartContext= createContext({})
import React, { createContext, useState } from 'react'

export const ContextProvider=createContext();

const Context = ({children}) => {
    
const [cart, setCart] = useState([]);

  return (
      <ContextProvider.Provider value={{ cart, setCart }}>
       {children}
    </ContextProvider.Provider>
  )
}

export default Context