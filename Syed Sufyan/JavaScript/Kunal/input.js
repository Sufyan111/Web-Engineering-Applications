const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userInput,
  sum = 0;

let input = () => {
  rl.question("Please input a number\n", function (string) {
    userInput = parseInt(string);
    sum = sum + userInput;

    // close input stream
    if (userInput == 0) {
      console.log(sum);
      rl.close();
    } else input();
  });
};

input();
