const hcf = (a, b) => {
  let hcf = 1;
  for (i = 1; i <= (a < b ? a : b); i++) {
    if (a % i == 0 && b % i == 0) {
      hcf = i;
    }
  }

  return hcf;
};

console.log(hcf(24, 36));
