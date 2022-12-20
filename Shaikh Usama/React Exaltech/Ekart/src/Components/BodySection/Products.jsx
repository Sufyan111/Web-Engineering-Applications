import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Products.css";

function Products() {
  const api = "https://fakestoreapi.com/products";
  const [apiData, setApiData] = useState([]);

  const getProducts = async () => {
    const result = await axios.get(api);
    // console.log(result.data);
    setApiData(result.data);
  };

  console.log(apiData);
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      {apiData.map((item) => {
        return (
          <Card key={item.key} className="card">
            <Card.Img
              variant="top"
              src={item.image}
              width="17rem"
              height="300rem"
              margin="10px"
            />
            <Card.Body>
              <Card.Title className="title">
                {item.title.slice(0, 10)}
              </Card.Title>
              <Card.Text>{item.description.slice(0, 25)}</Card.Text>
              <Button variant="primary">{item.price}$</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Products;
