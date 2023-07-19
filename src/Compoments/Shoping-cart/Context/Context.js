import { createContext, useState } from "react";
export const Cartstate = createContext();
export const Context = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "fashion",
      price: "200",
      image: "./images/jewellery.jpg",
    },
    {
      id: 2,
      name: "shoes",
      price: "300",
      image: "./images/shoes.jpg",
    },
    {
      id: 3,
      name: "clothes",
      price: "500",
      image: "./images/clothe.jpg",
    },
  ];
  const [product, setProduct] = useState(products);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <Cartstate.Provider value={{ product, cart, setCart, total, setTotal }}>
      {children}
    </Cartstate.Provider>
  );
};
