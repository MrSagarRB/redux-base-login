import React, { useContext, useState } from "react";
import { ContextProvider } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(ContextProvider);

  return (
    <div className=" w-[250px] flex flex-col gap-1  cursor-pointer ">
      <div className="w-full h-[200px] hover:grayscale">
        {" "}
        <img src={prod.images} alt={prod.name} width="100%" />{" "}
      </div>

      <div className=" flex justify-between items-center px-2 ">
        <span className="text-sm"> {prod.name}</span>
        <span className="text-sm"> Rs. {prod.price.substring(0, 3)} </span>
      </div>
      {/* <button
        className="border-[1px]"
        onClick={() => {
          setCart([...cart, prod]);
        }}
      >
        Add to Cart
      </button> */}

      {cart.includes(prod) ? (
        <button
          className="bg-purple-700 text-white px-2 py-1 w-[200px] ml-auto mr-auto "
          onClick={() => {
            setCart(cart.filter((c) => c.id !== prod.id));
          }}
        >
          {" "}
          Remove From Cart
        </button>
      ) : (
        <button
          className="bg-black text-white px-2 py-1 w-[130px] ml-auto mr-auto hover:opacity-90"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          {" "}
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
