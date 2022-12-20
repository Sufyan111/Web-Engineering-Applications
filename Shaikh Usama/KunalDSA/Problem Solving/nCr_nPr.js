const nCr = (n, r) => {
  return fact(n) / (fact(r) * fact(n - r));
};

const fact = (num) => {
  temp = 1;
  for (let i = 1; i <= num; i++) {
    temp *= i;
  }

  return temp;
};

const nPr = (n, r) => {
  return fact(n) / fact(n - r);
};

console.log("permutation-->>", nPr(10, 5));
console.log("Combination-->>", nCr(10, 5));
