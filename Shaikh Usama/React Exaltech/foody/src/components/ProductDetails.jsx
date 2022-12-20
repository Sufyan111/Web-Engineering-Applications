import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductDetails = ({ dispatch, product }) => {
  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", data: product });
  };

  return (
    <div className="main-container">
      <Card className="text-center" style={{ width: "700px" }}>
        <Card.Header>
          {" "}
          <img width={"200px"} src={product.image} alt={product.title} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            <strong>{product.price}</strong>
          </Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
