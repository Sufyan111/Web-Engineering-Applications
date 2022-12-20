nums = [1, 2, 1];

var getConcatenation = function (nums) {
  return (ans = [...nums, ...nums]);
};

console.log(getConcatenation(nums));
