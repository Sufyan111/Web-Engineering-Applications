import React from "react";
import { useState } from "react";

const SampleFunction = (props) => {
  console.log(props.data);
  return (
    <div>
      <h1>Data from functional component</h1>
      <h1>{props.data}</h1>
    </div>
  );
};

export default SampleFunction;
