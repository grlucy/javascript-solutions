var smallerNumbersThanCurrent = function (nums) {
  let sortArr = nums.slice();
  sortArr.sort((a, b) => a - b);

  let sortMap = {};
  for (let i = 0; i < sortArr.length; i++) {
    if (sortMap[sortArr[i]] === undefined) {
      sortMap[sortArr[i]] = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = sortMap[nums[i]];
  }
  return nums;
};
