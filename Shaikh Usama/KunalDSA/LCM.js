const LCM = (num1, num2) => {
  lcm = 1;

  for (let i = num1 > num2 ? num1 : num2; i <= num1 * num2; i++)
    if (i % num1 == 0 && i % num2 == 0) {
      return i;
    }

  //   return temp;
};

console.log(LCM(6, 8));
