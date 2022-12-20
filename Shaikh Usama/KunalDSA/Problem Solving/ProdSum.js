const ProdSum = (arr) => {
  let nums = arr.toString().split("");

  let nums1 = nums.map((item) => parseInt(item));

  let sum = nums1.reduce((a, b) => a + b);
  let prod = nums1.reduce((a, b) => a * b);

  return prod - sum;
};

arr = 34;
console.log(ProdSum(arr));
