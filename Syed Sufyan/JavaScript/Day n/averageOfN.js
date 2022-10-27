const avgOfN = (num) => {
  let sum = 0;
  for (i = num; i > 0; i--) {
    sum = sum + i;
  }

  return sum / num;
};

console.log(avgOfN(5));
