const numbers = [1, 2, 3, 4, 5];

const operate = numbers.map((item) => ({
  value: item,
}));

// console.log(operate);

const greater2 = numbers
  .filter((item) => item > 2)
  .map((item) => item * 2)
  .filter((item) => item > 2)
  .map((item) => item * 5);

console.log(greater2);
