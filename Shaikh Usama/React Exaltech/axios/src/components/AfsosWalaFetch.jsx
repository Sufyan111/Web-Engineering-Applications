import React, { useEffect } from "react";
import axios from "axios";
const AfsosFetch = () => {
  const aajaaRe = async () => {
    await axios
      .get("https://dummyjson.com/products/")
      .then((res) => res.data.products);

    // console.log(result.data.products);
  };

  useEffect(() => {
    const hello = aajaaRe();
    console.log("helloo-->", hello);
  }, []);
  return <div></div>;
};

export default AfsosFetch;
