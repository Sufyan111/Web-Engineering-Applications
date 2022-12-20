const nums = [2, 5, 1, 3, 4, 7];
const n = 3;

var shuffle = function (nums, n) {
  let num1 = nums.splice(0, n);
  console.log(num1, nums);
};

shuffle(nums, n);
