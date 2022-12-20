// x = {};
// y = {};
// console.log(Object.getPrototypeOf(x) == Object.getPrototypeOf(y));

// let person = { name: "Usama" };
// let objectBase = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnProperty Descriptor(objectBase, "toString");
// console.log(descriptor);

function Square() {
  this.side = 5;
  function giveSide() {
    return this.side ** 2;
  }
}

const sqr = new Square();
console.log(sqr);
