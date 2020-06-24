var runningSum = function (nums) {
  let result = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    let runningSum = nums[i] + result[result.length - 1];
    result.push(runningSum);
  }

  return result;
};
