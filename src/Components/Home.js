import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";

const Home = ({cart,setCart}) => {
  const productArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    images: faker.image.image(),
  }));
  let [product, setProduct] = useState(productArray);
  

  

  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  overflow-scroll  h-[650px] gap-10 px-[50px] pt-[10px] place-items-center scroll-smooth">
      {product.map((i,index) => {
        return <SingleProduct prod={i} cart={cart} setCart={setCart}  key={index}/>;
      })}
    </div>
  );
};

export default Home;
