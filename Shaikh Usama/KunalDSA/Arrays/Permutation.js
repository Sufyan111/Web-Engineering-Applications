nums = [0, 2, 1, 5, 3, 4];
var buildArray = function (nums) {
  let arr = [];
  for (i in nums) {
    arr.push(nums[nums[i]]);
  }
  return arr;
};

console.log(buildArray(nums));
