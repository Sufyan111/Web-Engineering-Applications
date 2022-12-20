function Shape(color) {
  this.color = color;
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

// If the duplicate() is same for several objects but not for circle, we can silply
// override it after extending

// We can even access the original method in the circle

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
  console.log("duplicate circle");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log("duplicate square");
};

// Here we have many forms/implementation of the same duplicate(), hence POLYMORPHISM

const c = new Circle(1);

// Magic of Polymorphism

let shapes = [new Circle(), new Square()];

for (shape of shapes) {
  shape.duplicate();
}
