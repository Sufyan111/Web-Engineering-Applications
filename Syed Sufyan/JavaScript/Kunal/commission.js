const commission = (mrp, commAmount) => {
  return (commAmount * 100) / mrp;
};

console.log(commission(250, 125));
