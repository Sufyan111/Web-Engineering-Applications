// Since we have seen that every data type has its base prototype, we can add repetative methods in the prototypes and that can be used
// by any object created using that prototype.

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

let c1 = new Circle();
c1.draw();
let c2 = new Circle();
c2.draw();

// Since the Circle Object has the draw method, for every instance i.e. c1, c2,.. created
// the draw() method is being created in the memory
// To overcome this we can add the draw() method to the prototype of Circle and
// that can be inherited by the intances created.

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// To add the method to prototype the syntax is
Circle.prototype.draw = function () {
  console.log("draw");
};
