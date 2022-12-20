const AverageOfN = (...num) => {
  let sum = num.reduce((a, b) => a + b);
  return sum / num.length;
};

console.log(AverageOfN(2, 3, 4, 5, 99));
