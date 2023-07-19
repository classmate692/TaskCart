import React, { useContext, useEffect } from "react";
import { Cartstate } from "./Context/Context";
import { Single_cart } from "./Context/Single_cart";
import "./Shoping_cart";
export const Cart = () => {
  const { cart, setCart } = useContext(Cartstate);
  const { total, setTotal } = useContext(Cartstate);

  useEffect(() => {
    
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
  }, [cart]);
  if (cart.length === 0) {
    return (
      <div>
        <img
          src="./images/sleepingpanda-removebg-preview (1).png"
          style={{
            width: "500px",
            height: "250px",
            display: "flex",
            alignContent: "center",
            opacity: "0.5",
            margin: "100px",
            marginLeft: "400px",
          }}
        ></img>
      </div>
    );
  }
  console.log(cart);
  return (
    <>
      <div className="shopingcontainer">
        {cart.map((prod) => (
          <Single_cart prod={prod} key={prod.id} />
        ))}
      </div>
      <hr></hr>
      <div style={{height:"50px",fontSize:"50px",display:"flex",justifyContent:"end",marginRight:"10px",fontWeight:"bolder"}}>total:{total}</div>

    </>
  );
};
