function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// Protoype is the base constructor for any data type.
// The methods defined in the prototye are directly inherited by the objects created

let c1 = new Circle();
let c2 = new Circle();

// To get prototype
console.log(Object.getPrototypeOf(c1));

// The prototype is same for the contructor object as well as the instances created of that object i.e.

console.log(
  (Object.getPrototypeOf(c1) === Object.getPrototypeOf(c2)) === Circle.prototype
); //true

// we have used '===', that means these all are pointing towards the same prototype object
