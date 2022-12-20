import React from "react";
import "./Search.css";

const Card = ({ title, description }) => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <span className="stars"></span>
              <h2 className="java">Hello</h2>
              <p className="java">{description}</p>
            </div>
          </div>
          <div className="face face2">
            <h2>{title}</h2>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Card;
