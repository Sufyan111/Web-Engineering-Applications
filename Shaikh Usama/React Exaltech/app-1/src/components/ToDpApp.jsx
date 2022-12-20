import React from "react";
import { useReducer } from "react";

const reducer = (todo, action) => {};
const ToDpApp = () => {
  const [todo, dispatch] = useReducer(reducer, []);
  return <div></div>;
};

export default ToDpApp;
