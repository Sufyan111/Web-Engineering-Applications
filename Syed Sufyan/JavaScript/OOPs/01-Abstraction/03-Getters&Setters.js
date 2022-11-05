function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 1 };

  let getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };
}

const circle1 = new Circle(10);
// to get locattion
circle1.getDefaultLocation();

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 1 };

  let getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      //validation on value
      if (!value.x || !value.y) throw new Error("invalid location");
      defaultLocation = value;
    },
  });
}

const circle2 = new Circle(80);

circle2.defaultLocation; // the get func will be called
