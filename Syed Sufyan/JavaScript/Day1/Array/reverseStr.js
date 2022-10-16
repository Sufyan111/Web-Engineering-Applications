nums = [12, 17, 11, 20, 2, 6, 7, 15];
target = 9;

// [-1,-2,-3,-4,-5]
// -8
// [2, 7, 11, 15]
// 9
// [3,2,4]
// 6
// [3,3]
// 6

var twoSum = function (nums, target) {
  let temp = [];
  for (i = 0; i < nums.length; i++) {
    let t = target - nums[i];
    console.log(temp, t, temp[-1]);
    if (temp.includes(t)) {
      return [temp.indexOf(t), i];
    }
    temp.push(nums[i]);
  }
};
console.log(twoSum(nums, target));
