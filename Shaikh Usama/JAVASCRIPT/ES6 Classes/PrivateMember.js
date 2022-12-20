const _newShape = "hello";

class Shape {
  constructor(params) {
    this.params = params;
    this[_newShape] = params;
  }
}

const shp = new Shape(5);
console.log(shp);
