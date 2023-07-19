import React from "react";
import {  Link } from "react-router-dom";
import { useContext } from "react";
import { Cartstate } from "./Context/Context";
import { Single_cart } from "./Context/Single_cart";
import { BsFillCartCheckFill } from "react-icons/bs";
import "./Shoping_cart.css";
export const Shoping_cart = () => {
  const { product } = useContext(Cartstate);
  return (
    <div className="shopmaincontainer">
      <Link
        to="/cart"
        style={{ display: "flex", justifyContent: "end", marginRight: "20px" }}
      >
        <BsFillCartCheckFill size={"4em"} />
      </Link>
      <div className="shopingcontainer">
        {product.map((prod) => (
          <Single_cart prod={prod} />
        ))}
      </div>
    </div>
  );
};
