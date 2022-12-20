// const num = 371;

// var digits = ("" + num).split("");
// sum = 0;
// digits.forEach((item) => {
//   sum = sum + item ** digits.length;
// });

// if (sum == num) console.log("ArrmmmmmmmStrrngggg");

const ArmStrong = (num) => {
  let digit = num.toString().split("");

  sum = 0;
  digit.forEach((item) => (sum = sum + item ** digit.length));
  return sum;
};

console.log(ArmStrong(371));
