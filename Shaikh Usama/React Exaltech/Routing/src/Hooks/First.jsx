import React from "react";
import Second from "./Second";
const First = ({ userName }) => {
  return (
    <div>
      <h1>First</h1>
      <Second userName={userName} />
    </div>
  );
};

export default First;
