// 1. Write a function to add integer values of an array

const arrSum = (arr) => {
  //   return arr.reduce((a, b) => a + b);
  let sum = 0;

  //   for (i of arr) {
  //     sum += i;
  //   }

  for (i in arr) {
    sum += arr[i];
  }
  return sum;
};

arr = [556, 334, 559, 3360, 4475, 2150, 348, 369, 963];

console.log(arrSum(arr));
