// Output: 5
// [1,2,1]
nums = [3, 6, 2, 3];
// [2,3,3,6]

// var largestPerimeter = function (nums) {
//   nums.sort();
//   console.log(nums);

//   for(i=0; i < nums.length; i++)
//   if (nums[i] < nums[i+1] + nums[i+2] && nums[0] > nums[2] - nums[1]) {
//     temp = true;
//   }
//   if (temp) {
//     return nums[2] + nums[1] + nums[0];
//   }

//   return 0;
// };

var largestPerimeter = function (nums) {
  nums.sort();

  for (let i = nums.length - 2; i > 0; i--) {
    console.log(nums[i + 1], nums[i - 1], nums[i]);
    if (nums[i + 1] < nums[i] + nums[i - 1]) {
      // Accept: find the triangle with largest perimeter
      return nums[i] + nums[i + 1] + nums[i - 1];
    }
  }

  // Reject: impossible to make triangle
  return 0;
};

console.log(largestPerimeter(nums));
