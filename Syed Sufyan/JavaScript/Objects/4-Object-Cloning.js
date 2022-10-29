const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

const square = {
  side: 1,
  draw() {
    console.log("draw");
  },
};

// 1. Using for-in loop
const another = {};

for (let key in circle) another[key] = circle[key];
for (let key in square) another[key] = square[key];

console.log(another); //{ radius: 1, draw: [Function: draw], side: 1 }

// 2. Using Object.assign()

const another2 = Object.assign({}, circle, square);

console.log(another2); //{ radius: 1, draw: [Function: draw], side: 1 }

// 3. Using spread operator

const another3 = { ...circle, ...square };

console.log(another3); //{ radius: 1, draw: [Function: draw], side: 1 }
