function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// If the duplicate() is same for several objects but not for circle, we can silply
// override it after extending

// We can even access the original method in the circle as on line 22

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this);
  console.log("duplicate circle");
};
