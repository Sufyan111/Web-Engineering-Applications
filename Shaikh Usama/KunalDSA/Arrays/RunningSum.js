nums = [1, 2, 3, 4];

var runningSum = function (nums) {
  runningSum = [];

  for (let i = 1; i <= nums.length; i++) {
    runningSum[i - 1] = nums.slice(0, i).reduce((a, b) => a + b);
  }
  return runningSum;
};

console.log(runningSum(nums));
