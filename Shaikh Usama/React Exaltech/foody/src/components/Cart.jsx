import React from "react";
import ProductItem from "./ProductItem";

const Cart = ({ state, dispatch }) => {
  if (state.cartItems.length === 0) {
    return <h3>Cart empty</h3>;
  }

  return (
    <div className="main-container">
      {state.cartItems.map((item) => (
        <ProductItem
          key={item.id}
          product={item}
          btnName={"Remove"}
          dispatch={dispatch}
          btnAction="REMOVE_FROM_CART"
        />
      ))}
    </div>
  );
};

export default Cart;
