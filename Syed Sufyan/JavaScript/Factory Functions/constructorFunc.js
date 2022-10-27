function GetCircleArea(radius) {
  this.pi = 3.14;
  this.radius = radius;
  this.name = "circle";
  this.getArea = function () {
    return this.pi * this.radius * this.radius;
  };
}

console.log(new GetCircleArea(5).getArea());
