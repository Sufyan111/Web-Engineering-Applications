import React from "react";
import axios from "axios";
// import { useEffect } from "react";
import { useState } from "react";

const Crud = () => {
  // Set data Using useState.
  const [result, setResult] = useState([]);

  // Fetch Data from API
  const getMethod = async () => {
    try {
      const api = `https://fakestoreapi.com/users/`;
      const fetchedData = await axios.get(api);
      console.log(fetchedData.data);
      setResult(fetchedData.data);
    } catch {
      alert("error occured");
    }
  };

  // mount data once using component didMount
  //   useEffect(() => {
  //     getMethod();
  //   }, []);

  //   call data using button click
  //   const getApiData = () => {
  //     // console.log(id);
  //     getMethod();
  //   };

  const individualData = async (id) => {
    console.log(id);
    const api = `https://fakestoreapi.com/users/${id}`;
    const fetchedData = await axios.get(api);
    console.log("Second function call", fetchedData.data);
  };

  return (
    <div>
      <h2>Hello world</h2>
      <button onClick={getMethod}> Show data</button>
      <div>
        {result.map((item) => {
          return (
            <div key={item.id}>
              <h2>name : {item.username}</h2>
              <h2>email : {item.email}</h2>
              <h2> id is : {item.id}</h2>
              <button onClick={() => individualData(item.id)}>
                Get Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Crud;
