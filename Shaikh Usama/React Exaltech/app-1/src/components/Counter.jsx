import React from "react";
import { useReducer } from "react";
// import { useState } from "react";

const reducer = (state, action) => {
  console.log(action);
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 9 });

  return (
    <div>
      <h1>Counter here</h1>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Counter;
