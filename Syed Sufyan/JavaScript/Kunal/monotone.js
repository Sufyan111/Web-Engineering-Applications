var isMonotonic = function (nums) {
  if (nums[0] < nums[nums.length - 1]) {
    for (i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        return false;
      }
    }
  } else
    for (i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        return false;
      }
    }
  return true;
};

a = [1, 2, 2, 3];
b = [6, 5, 4, 4];
c = [1, 3, 2];

console.log(isMonotonic(a));
console.log(isMonotonic(b));
console.log(isMonotonic(c));
