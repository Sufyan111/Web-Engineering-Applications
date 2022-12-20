// [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]],
const buildArray = (nums) => {
  let output = [];
  for (i in nums) {
    output.push(nums[nums[i]]);
  }
  return output;
};

nums = [5, 0, 1, 2, 3, 4];
console.log(buildArray(nums));
