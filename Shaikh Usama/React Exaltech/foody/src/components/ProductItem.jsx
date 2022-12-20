import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductItem.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product, dispatch, btnName, btnAction }) => {
  const handleAddToCart = () => {
    dispatch({ type: btnAction, data: product });
  };

  const handleViewDetails = () => {
    dispatch({ type: "VIEW_DETAILS", data: product });
  };

  return (
    <Card className="card">
      <Card.Img className="cardImg" variant="top" src={product.image} />
      <Card.Body className="cardBody">
        <Card.Title className="cardTitle">
          {product.title.slice(0, 25)}...
        </Card.Title>
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        <Link to="/product-details">
          <Button variant="primary" onClick={handleViewDetails}>
            View Details
          </Button>
        </Link>
        <Button variant="primary" onClick={handleAddToCart}>
          {btnName}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
