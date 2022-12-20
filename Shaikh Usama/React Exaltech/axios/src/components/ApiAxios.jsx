import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ApiAxios.css";
const ApiAxios = () => {
  const [result, setResult] = useState([]);
  const fetchApi = async () => {
    const value = await axios.get(
      "https://hp-api.herokuapp.com/api/characters"
    );
    console.log(value.data);
    setResult(value.data);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="container">
      {result.map((item) => {
        return (
          <div>
            <div key={item.name} className="card">
              <img src={item.image} alt="Girl in a jacket"></img>
            </div>
            <h4>{item.name}</h4>
            <h4>{item.actor}</h4>
            <h4>{`House ${item.house}`}</h4>
          </div>
        );
      })}
      {/* <h1>{result[10].title}</h1> */}
    </div>
  );
};

export default ApiAxios;
