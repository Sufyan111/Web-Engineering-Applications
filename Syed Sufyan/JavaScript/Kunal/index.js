let readline = require("readline");

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("KYAAAA Bolte\n", function (string) {
  console.log(`${string} BOLLLLTTTTE`);
  r1.close();
});
