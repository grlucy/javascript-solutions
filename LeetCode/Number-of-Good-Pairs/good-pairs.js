var numIdenticalPairs = function (nums) {
  let result = 0;
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = [i];
    } else {
      result += map[nums[i]].length;
      map[nums[i]].push(i);
    }
  }
  return result;
};
