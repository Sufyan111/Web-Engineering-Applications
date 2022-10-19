let readline = require("readline");

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fact = 1;

r1.question("Please input a number to find the factorial for\n", (string) => {
  let num = parseInt(string);
  for (i = 2; i <= num; i++) {
    fact = fact * i;
  }
  r1.close();
  console.log(fact);
});
