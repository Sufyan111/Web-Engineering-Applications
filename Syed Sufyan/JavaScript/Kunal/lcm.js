const lcm = (a, b) => {
  for (i = b > a ? b : a; i <= a * b; i++) {
    if (i % a == 0 && i % b == 0) {
      return i;
    }
  }
};

console.log(lcm(6, 8));
