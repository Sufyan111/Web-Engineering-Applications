const mixMax = (num1, num2, num3) => {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    }
    return num3;
  }

  return num2;
};

const mixMin = (num1, num2, num3) => {
  if (num1 < num2) {
    if (num1 < num3) {
      return num1;
    }
    return num3;
  }

  return num2;
};
console.log(mixMax(1, -2099, 3));
console.log(mixMin(1, -2099, 3));
// console.log(mixMax(3, 4, 2));
// console.log(mixMax(3, 2, 4));
