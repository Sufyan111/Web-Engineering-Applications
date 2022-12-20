import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel() {
  const carouselData = [
    {
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      title: "Best iPhone Ever",

      image:
        " https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      title: "Best Watch Ever",
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80 ",
    },
    {
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      title: "Best Airpods Ever",
      image:
        " https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];
  return (
    <Carousel>
      {carouselData.map((item) => {
        return (
          <Carousel.Item>
            <img className="d-block w-100" src={item.image} alt="First slide" />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
