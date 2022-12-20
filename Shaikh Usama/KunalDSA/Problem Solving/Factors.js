const Factors = (fact) => {
  nums = [];
  for (let i = 1; i <= 10; i++) {
    // console.log("from for");
    if (fact % i == 0) nums.push(i);
  }
  return nums;
};

console.log(Factors(15));
