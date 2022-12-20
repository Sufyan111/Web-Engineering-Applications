import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Products from "./Products";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Landing Component</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
