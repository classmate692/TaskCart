import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Cartstate } from "./Context";
import "./Single_cart.css";
export const Single_cart = ({ prod }) => {
  const { cart, setCart } = useContext(Cartstate);
 
  const addoncart = (id) => {
    const productExists = cart.some((item) => item.id === prod.id);

    if (!productExists) {
      setCart([...cart, prod]);
    } else {
      console.log("Product already exists in the cart.");
    }
    toast.success("add in cart!");
  };

  return (
    <div className="cartcontainer">
      <div className="cartdiv">
        <div>
          <img src={prod.image} alt="Product Image" className="imag" />
          <h1 className="cartname">{prod.name}</h1>
          <h2 className="cartprice">Rs.{prod.price}</h2>
        </div>
        {cart.includes(prod) ? (
          <button
            className="cartremovebtn"
            onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
          >
            remove from cart
          </button>
        ) : (
          <button className="cartaddbtn" onClick={() => addoncart(prod.id)}>
            Add to cart
          </button>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};
