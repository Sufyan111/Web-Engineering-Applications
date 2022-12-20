accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

const arr = accounts.map((item) => {
  return item.reduce((a, b) => a + b);
});

const num = Math.max(...arr);
console.log(num);
