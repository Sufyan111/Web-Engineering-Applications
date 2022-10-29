let circle = {
  // Normal key-value pairs
  radius: 1,
  //   Object in object
  location: {
    x: 1,
    y: 1,
  },
  //   function in object which is called a method of that object
  draw: function () {
    console.log("draw");
  },
};

console.log(circle.radius); //1
console.log(circle.location); // { x: 1, y: 1 }
circle.draw(); // draw
