import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/services">Services</Link>
      <br />
      <Link to="/contact">Contact</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
