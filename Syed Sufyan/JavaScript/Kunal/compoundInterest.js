const compoundInterest = (principal, rate, n, t) => {
  let interest;

  interest = principal * (1 + (rate / n) ** (n * t)) - principal;

  console.log(interest);
  //   yearlyAmount = principal / years;
  //   for (i = 1; i <= years; i++) {
  //     yearlyAmount += (yearlyAmount * rate) / 100;
  //     console.log("yearly amount", yearlyAmount);
  //   }

  //   interest = (principal) - yearlyAmount;
  //   console.log("interest", interest);
};

compoundInterest(100000, 10, 1, 2);
