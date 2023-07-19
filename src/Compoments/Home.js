import React from "react";
import { Link } from "react-router-dom";
import '../Compoments/Home.css';
export const Home = () => {
  return (
    <div className="homecontainer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          
        }}
      >
        <div  className="taskcart">
          <h1  className="webname">
            TaskCart
          </h1>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Link to="/shoping_cart" className="homeshopbtn">
                <button className="shopbtn" >
                  Shoping cart
                </button>
              </Link>
            </div>
            <div>
              <Link to="/todo">
                <button className="todobtn" id="hometodobtn">ToDo</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/image4.svg" width="600px" height="500px" style={{margin:"70px",marginBottom:"0px"}}></img>
        </div>
      </div>
    </div>
  );
};
