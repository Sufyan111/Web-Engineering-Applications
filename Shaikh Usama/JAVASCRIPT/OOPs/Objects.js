// Properties are used to hold values and Methods are used to define logic

//******************************************Object Literals*****************************//
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw circle with radius", this.radius);
  },
};

console.log(circle.constructor);
// console.log("From Object Literal ->", circle.draw());

//*****************************Factory function*******************************//
// Return Key Should ne added
function createSquare(side) {
  return {
    side,
    draw: function () {
      console.log("draw square", side);
    },
  };
}

console.log(createSquare.constructor);
const square = createSquare(1);
// console.log("From Factory function ->", square.draw());

// *****************************Constructor Function**********************************//

function Triangle(a, b, hypo) {
  this.a = a;
  this.b = b;
  this.hypo = hypo;

  this.euclidAlgo = function () {
    return a ** 2 + b ** 2 + hypo ** 2;
  };
}

console.log(Triangle.constructor);
const triangle = new Triangle(3, 4, 5);
// Here "new" keyword does 3 things, first define an empty object ,
// second point the this properties and methods to the same object,
// third returns the this property and methods.

// console.log(triangle.euclidAlgo());




// EVERY OBJECT HAS A CONSTRUCTOR PROPERTY, WHICH ARE USED TO GIVE REFERENCE TO 
// THE FUNCTION(CONSTRUCTOR) USED TO CREATE THAT OBJECT