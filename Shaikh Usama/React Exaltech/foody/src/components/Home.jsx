import React from "react";
import ProductItem from "./ProductItem";

const Home = ({ products, dispatch }) => {
  return (
    <div className="main-container">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          btnName="Add To Cart"
          dispatch={dispatch}
          btnAction="ADD_TO_CART"
        />
      ))}
    </div>
  );
};

export default Home;
