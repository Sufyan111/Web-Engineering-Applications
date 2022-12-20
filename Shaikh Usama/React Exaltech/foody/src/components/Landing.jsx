import React, { useState } from "react";
import Cart from "./Cart";
import Home from "./Home";
import NavigationBar from "./Navigation";
import ProductDetails from "./ProductDetails";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";

const intitialState = {
  allProducts: [],
  cartItems: [],
  selectedItem: {},
};

const reducer = (state, action) => {
  console.log(state);

  if (action.type === "ALL_PRODUCTS") {
    return { ...state, allProducts: action.data };
  }

  if (action.type === "ADD_TO_CART") {
    return { ...state, cartItems: [...state.cartItems, action.data] };
  }

  if (action.type === "REMOVE_FROM_CART") {
    state.cartItems = state.cartItems.filter(
      (item) => item.id !== action.data.id
    );
    return state;
  }

  if (action.type === "VIEW_DETAILS") {
    return { ...state, selectedItem: action.data };
  }
};

const Landing = () => {
  const [store, dispatch] = useReducer(reducer, intitialState);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: "ALL_PRODUCTS", data: res.data });
    setProducts(res.data);
  };

  useEffect(() => {
    getAllProducts();
  }, [store]);

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={<Home products={products} dispatch={dispatch} />}
        />
        <Route
          path="/cart"
          element={<Cart state={store} dispatch={dispatch} />}
        />
        <Route
          path="/product-details"
          element={
            <ProductDetails dispatch={dispatch} product={store.selectedItem} />
          }
        />
      </Routes>
    </div>
  );
};

export default Landing;
