// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FilterSearch = () => {
//   const [fetchData, setFetchData] = useState([]);
//   const [text, setText] = useState("");
//   const [reset, setReset] = useState([]);

//   //   function to call API
//   const getData = async () => {
//     const res = await axios.get("https://hp-api.herokuapp.com/api/characters");

//     setFetchData(res.data);
//     setReset(res.data);
//   };

//   //   Component Mount for fetching API
//   useEffect(() => {
//     getData();
//   }, []);

//   // COmponent DidUpdate for filter
//   useEffect(() => {
//     const filteredData = fetchData.filter((filtered) => {
//       return filtered.name.toLowerCase().includes(text.toLowerCase());
//     });
//     setFetchData(filteredData);
//   }, [text]);

//   // JSX  goes here
//   return (
//     <div>
//       <input
//         type="search"
//         placeholder="search"
//         onChange={(e) => {
//           setText(e.target.value);
//           //   console.log(e.target.value);
//         }}
//       />
//       {fetchData.map((item) => {
//         return (
//           <div>
//             <h3 key={Math.random()}>{item.name}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default FilterSearch;
