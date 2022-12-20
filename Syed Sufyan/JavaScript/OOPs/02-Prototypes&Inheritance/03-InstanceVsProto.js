function Circle(radius) {
  // Instance Members
  this.radius = radius;
}

// Prototype Methods
Circle.prototype.draw = function () {
  console.log("draw");
};
let c1 = new Circle(10);
let c2 = new Circle(10);

Circle.prototype.toString = function () {
  return "Radius is " + this.radius;
};

console.log(c1.toString());
// The proto for Circle obj has draw() method as well as a PROTOTYPE of the "BASE OBJECT",and the "BASE OBJECT" has a method toString(),
// which converts anything to string, we can add method with the same name in the Circle Obj's Prototype,
// Then the javascript engine will call the nearest method named toSring(), Hence the output of the above log will be--->

//   Radius is 10

// We can call Intance members in prototypical members and vice-versa
