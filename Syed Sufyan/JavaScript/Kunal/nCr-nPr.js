// nCr= nPr/r! = n!/(r!(n-r)!)

const factorial = (num) => {
  let fact = 1;
  if (num != 0) {
    for (i = 2; i <= num; i++) {
      fact = fact * i;
    }
  }
  return fact;
};

const nPr = (n, r) => {
  return factorial(n) / factorial(n - r);
};

const nCr = (n, r) => {
  return nPr(n, r) / factorial(r);
};

console.log(nCr(5, 3));
console.log(nPr(5, 3));
