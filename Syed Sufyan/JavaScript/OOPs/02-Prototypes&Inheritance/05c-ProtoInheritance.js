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

extend(Circle, Shape);

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

// Now if we can add a new constructor Square and set its proto to Shape
function Square(size) {
  this.size = size;
}

extend(Square, Shape);

// In order to change its proto we can write the same logic
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

// As our contructors will grow, we have to writhe the above logic repetatively, hence we can define
// a func for it

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// Now we can silply call the func, this method is called as
// INTERMEDIATE FUNcTION INHERITANCE
// extend(Square, Shape)
