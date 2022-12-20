import React from "react";
import { useRef } from "react";

const UseRef = () => {
  const myRef = useRef(null);

  console.log(myRef);

  //   Whenever you take a reference of any element it retur;n an Object
  //   event.preventDefault() prevent from refreshing the page

  return (
    <div>
      <h1>UseRef</h1>
      <form action="">
        <lable>First Name</lable>
        <input></input>
        <lable>Last Name</lable>
        <input></input>
        <lable>Middle Name</lable>
        <input></input>
        <lable>Number </lable>
        <input></input>
        <lable>Address</lable>
        <input></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UseRef;
