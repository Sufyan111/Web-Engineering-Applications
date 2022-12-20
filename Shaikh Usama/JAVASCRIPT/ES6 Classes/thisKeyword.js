// function hello() {
//   function draw() {
//     console.log(this);
//   }
// }

// const Obj = new hello();
// Obj.draw;

class Circle {
  draw() {
    console.log(this);
  }
}

const Obj = new Circle();
const draw1 = Obj.draw;
draw1();
