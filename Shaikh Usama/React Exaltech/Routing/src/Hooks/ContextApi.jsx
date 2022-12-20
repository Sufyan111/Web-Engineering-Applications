import React from "react";
import First from "./First";

// export const userContext = createContext();

// console.log(userContext);
const userName = "Adam";
const ContextApi = () => {
  return (
    <div>
      <h1>Context Api</h1>
      <First userName={userName} />
    </div>
  );
};

export default ContextApi;
