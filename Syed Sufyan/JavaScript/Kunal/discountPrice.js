let readline = require("readline");

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const discountPercent = () => {
  let mrp, discAmount, total;
  r1.question("Please input the MRP\n", (string) => {
    mrp = parseInt(string);
    r1.question("Please input the Final amount after discount\n", (string) => {
      discAmount = parseInt(string);
      r1.close();
      total = 100 - (discAmount * 100) / mrp;
      console.log(total);
    });
  });
};

discountPercent();
