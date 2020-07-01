var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
};
