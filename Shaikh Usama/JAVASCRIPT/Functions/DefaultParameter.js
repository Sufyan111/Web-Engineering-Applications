const interest = (principal = 10000, rate = 3.5, year = 5) => {
  return ((principal * rate) / 100) * year;
};

console.log(interest());
