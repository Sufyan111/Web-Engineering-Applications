// import React from "react";

// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";

// const FetchApi = () => {
//   const [data, setData] = useState();
//   const getApiData = async () => {
//     const result = await axios.get("https://fakestoreapi.com/products");
//     setData(result.data);
//     console.log(data);
//   };

//   useEffect(() => {
//     getApiData();
//   }, []);

//   return (
//     <div>
//       <h1>HEllo</h1>
//       {data.map((item) => (
//         <h4>{item.id}</h4>
//       ))}
//     </div>
//   );
// };

// export default FetchApi;
