import React from 'react'
import { Link } from 'react-router-dom'
import SingleProduct from './SingleProduct';

const Cart = ({cart,setCart}) => {
  console.log(cart);
  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  overflow-scroll  h-[650px] gap-10 px-[50px] pt-[10px] place-items-center scroll-smooth">
      {
        cart.map((prod)=>{
          return (
           <SingleProduct 
           prod={prod}
           key={prod.id}
           cart={cart}
           setCart={setCart}

           />
          )
        })
      }
     
    </div>
  )
}

export default Cart