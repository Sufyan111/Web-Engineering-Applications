import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState(0);
  const [value, setValue] = useState(0);
  console.log("first line");

  //   unconditional
  useEffect(() => {
    console.log("this is unconditional");
  }, []);

  //   componentDidMount
  useEffect(() => {
    console.log("this is did mount");
  }, []);

  //   componentDidUpdate
  useEffect(() => {
    console.log("this is did Update");
  }, [value]);

  //   componentWillUnmount
  useEffect(() => {
    console.log("this is component will unmount");
    return () => {};
  }, []);
  console.log("last line");
  return (
    <div>
      <h2>hello from use Effect</h2>
      <h2>{data}</h2>
      <button onClick={() => setData(data + 1)}>data</button>
      <button onClick={() => setValue(value + 1)}>value</button>
    </div>
  );
};

export default UseEffect;
