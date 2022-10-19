let readline = require("readline");

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const discountAmount = () => {
  let mrp, discPercent, total;
  r1.question("Please input the MRP\n", (string) => {
    mrp = parseInt(string);
    r1.question("Please input the discount percent\n", (string) => {
      discPercent = parseInt(string);
      r1.close();
      total = (mrp * (100 - discPercent)) / 100;
      console.log(total);
    });
  });
};

discountAmount();
