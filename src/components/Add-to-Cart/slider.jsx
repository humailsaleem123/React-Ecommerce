import React from "react";
import "./slider.css";
import Login from "../Login/login";
import { Link } from "react-router-dom";

function Slider({ show, cartItems, onAdd, onRemove }) {
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const taxPrice = itemsPrice * 0.14;

  const shippingPrice = itemsPrice > 2000 ? 0 : 50;

  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className={show ? "right-slider active" : "right-slider"}>
      <h2 className="text-center mt-3">Cart Items</h2>

      <div className="text-center mt-5 block">
        <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>

        {cartItems.map((item) => (
          <div key={item.id} className="slider-row">
            <div className="col-2">{item.pname}</div>

            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add slider-btn">
                +
              </button>
              <button
                onClick={() => onRemove(item)}
                className="remove slider-btn"
              >
                -
              </button>{" "}
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div className="main-row">
              <div className="slider-scnd-row">
                <div className="col-2">Items Price</div>

                <div className="col-1 text-center">
                  ${itemsPrice.toFixed(2)}
                </div>
              </div>

              <div className="slider-scnd-row">
                <div className="col-2">Tax Price</div>

                <div className="col-1 text-center">${taxPrice.toFixed(2)}</div>
              </div>

              <div className="slider-scnd-row">
                <div className="col-2">Shipping Price</div>

                <div className="col-1 text-center">
                  ${shippingPrice.toFixed(2)}
                </div>
              </div>

              <div className="slider-scnd-row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>

                <div className="col-1 text-center">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>

              <div className="chk-row">
                <Link to="/loginPage">
                  {" "}
                  <button className="slider-btn"> CHECKOUT </button>{" "}
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Slider;
