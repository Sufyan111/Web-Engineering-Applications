function Circle(radius) {
  this.radius = radius;

  this.defaultLocation = { x: 1 };

  this.computeOptimumLocation = function () {
    // ...
    // This is sensitive method and shud not be available to use or call from outside
  };

  this.draw = function () {
    this.computeOptimumLocation();
    console.log("draw");
  };
}

// To be not able to call the private methods from outside,
//  we have to change methods as local variables inside the Object

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 1 };

  let computeOptimumLocation = function () {
    // ...
    // This is sensitive method and shud not be available to use or call from outside
  };

  this.draw = function () {
    // No need to add 'this' b4 the func call due to closure.
    computeOptimumLocation();

    // this.radius
    console.log("draw");
  };
}
