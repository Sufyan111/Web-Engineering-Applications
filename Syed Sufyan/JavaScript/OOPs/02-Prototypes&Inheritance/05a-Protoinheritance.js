// 4 We now create a new Obj named 'Shape'
function Shape() {
  //..
}

// 5 and add the duplicate() to the shape's proto
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

// 9 But But But But BUt when we reset the proto, the constructor is also changed to the
// shape constructor, in order to resolve this, we need to reset the circle's contructor again
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

// 6 Circle.prototype.duplicate = function(){
//     console.log('duplicate');
// }

// 1 We have a circle constructor with 2 proto properties draw() and duplicate()

// 2 We want to create a new constructor 'Square', it shud also have duplicate() with exact
// same implementation as Circle's duplicate()

// 3 To overcome this we can create a new Object 'Shape' and add the duplicate property to its
// proto and the square & circle can inherit from it.

// 7 now we can inherit the duplicate() in circle by changing the BaseCircle Object i.e. its proto
// to the proto of the Square Obj
// IMPORTANT --------> This shud be done before adding methods to circles proto i.e. draw()
//  if we change the proto after that, that methods cannot be accessed

// Circle.prototype = Object.create(Shape.prototype);
