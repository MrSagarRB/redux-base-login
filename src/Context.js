import React from "react";

const Cart = createContext();

const context = (chilren) => {
  return <Card.Provider>{chilren}</Card.Provider>;
};

export default context;
