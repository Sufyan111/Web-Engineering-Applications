const PerfectNumber = (num) => {
  sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }

  return sum == num ? "A perfect num" : "Not a perfect";
};

console.log(PerfectNumber(28));
// console.log(PerfectNumber(28));
