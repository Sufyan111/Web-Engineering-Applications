function Circle(radius) {
  // Instance Members
  this.radius = radius;
  this.move = function () {
    console.log("move");
  };
}

const c1 = new Circle(10);

// Prototype Methods
Circle.prototype.draw = function () {
  console.log("draw");
};

// We can add methods to prototypes even after declaring objects such as c1,
// the added methods will be available for c1

c1.draw(); // 'draw'

// if we get keys with Object.keys() then we will get array of only the Intance members not the proto members

console.log(Object.keys(c1)); //[ 'radius', 'move' ]

// But the for-in loop will return all members, instance as well as proto

for (let key in c1) {
  console.log(key);
}

// this will return:
// radius
// move
// draw

// to check whether a property is instance/own property of proto property we have a method
console.log(c1.hasOwnProperty("move")); // true
console.log(c1.hasOwnProperty("draw")); // false
