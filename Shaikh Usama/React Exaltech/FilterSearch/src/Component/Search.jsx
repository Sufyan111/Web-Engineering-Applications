import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
const Search = () => {
  const api = "https://dummyjson.com/products";

  const [productsData, setProductsData] = useState([]);
  const getProducts = async () => {
    const response = await axios.get(api);

    setProductsData(response.data.products);
    // console.log(response.data.products);
  };

  useEffect(() => {
    getProducts();
    // console.log("useState", productsData);
  }, []);

  return (
    <div>
      {productsData.map((item) => {
        console.log(item);
        return <Card title={item.title} description={item.description} />;
      })}
    </div>
  );
};

export default Search;
