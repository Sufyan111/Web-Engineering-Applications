const HCF = (num1, num2) => {
  hcf = 1;
  for (let i = 0; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      hcf = i;
    }
  }
  return hcf;
};

console.log(HCF(24, 36));
