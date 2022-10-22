const CompundInterest = (interestRate, interestApplied, interestPeriod) => {
  return (
    (1 + interestRate / interestApplied) ** interestApplied * interestPeriod
  );
};

console.log(CompundInterest(5, 33, 36));
