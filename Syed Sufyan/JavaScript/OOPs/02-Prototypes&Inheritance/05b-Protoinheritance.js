//If we have args in shape, in order for circle to also have that property is calling shape in Circle cons

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

let c = new Circle(1, "red");

// This will add the color to window as by default this will point to global object,
// in order to fix this we cant use new keyword since itll add the color to new Shape not to circle,
// The resolution is to use call method and pass this as first arg, color as second as in line 12
// function Circle(radius, color) {
//     Shape(color);
//     this.radius = radius;
//   }
