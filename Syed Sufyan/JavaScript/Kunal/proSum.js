const digitsProductSumDifference = (num) => {
  let arrNum = num.toString().split("");

  console.log(arrNum);

  let sum = arrNum.reduce((a, b) => parseInt(a) + parseInt(b));
  let prod = arrNum.reduce((a, b) => a * b);

  return prod - sum;
};

console.log(digitsProductSumDifference(786));
