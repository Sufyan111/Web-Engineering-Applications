arr = [1, 1, 2];

// const duplicates = (nums) => {
//   let temp = {};
//   for (i = 0; i < nums.length; i++) {
//     if (!temp[i]) {
//       temp[nums[i]] = nums[i];
//     }
//   }
//   nums = Object.values(temp);
//   return nums;
// };
var removeDuplicates = function (nums) {
  let count = 0,
    temp = [];
  for (i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) == i) {
      temp.push(nums[i]);
      count++;
    }
  }
  return [count, temp];
};
console.log(removeDuplicates(arr));
