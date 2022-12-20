let readline = require("readline");

const readline1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;
const close = (number) => {
  if (number == 0) {
    readline1.close();
    console.log(sum);
  } else Input();
};

const Input = () => {
  readline1.question("Enter a Number ", (number) => {
    sum = sum + parseInt(number);
    // console.log(sum);
    close(number);
  });
};

Input();
