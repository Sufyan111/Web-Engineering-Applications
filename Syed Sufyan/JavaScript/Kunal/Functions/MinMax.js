// Define two methods to print the maximum and the minimum number respectively among three numbers entered by the user.

const maximum = (num1, num2, num3) => {
  if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  }
  return num1;
};

console.log(maximum(1, -2099, 3));
console.log(maximum(1, 2, -3));
console.log(maximum(1, -2, -3));

const minimum = (num1, num2, num3) => {
  if (num2 < num1 && num2 < num3) {
    return num2;
  } else if (num3 < num1 && num3 < num2) {
    return num3;
  }
  return num1;
};

console.log(minimum(1, -2099, 3));
console.log(minimum(1, 2, -3));
console.log(minimum(1, -2, -3));
