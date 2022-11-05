// let x = {};
// let x = new Object()

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// console.log(Circle.constructor);
const circle1 = new Circle(10);

// Adding Properties

circle1.location = { x: 1, y: 1 };
circle1.color = "red";
console.log(circle1);

// Removing properties
delete circle1.color;
console.log(circle1);
