let readline = require("readline");

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

const input = () => {
  r1.question("Please input a number\n", (num) => {
    if (num == 0) {
      console.log(`----Maximum number is ${Math.max(...arr)}----`);
      r1.close();
    } else {
      arr.push(parseInt(num));
      input();
    }
  });
};

input();
