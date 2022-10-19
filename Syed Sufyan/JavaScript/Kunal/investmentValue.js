const investmentValue = (principal, rate, years) => {
  let total = 0;
  for (i = 1; i <= years; i++) {
    principal += (principal * rate) / 100;
    // principal = total;
  }

  return principal;
};

console.log(investmentValue(8900, 9, 12));
