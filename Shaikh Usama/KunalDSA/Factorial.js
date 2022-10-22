let readline = require("readline");

let rmd = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fact = 1;
rmd.question("Enter a Number\n", (number) => {
  for (let i = 1; i <= parseInt(number); i++) {
    fact = fact * i;
  }
  rmd.close();
  console.log(fact);
});
