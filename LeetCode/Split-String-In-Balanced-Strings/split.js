var balancedStringSplit = function (s) {
  let arr = s.split("");
  let total = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "R") {
      total++;
    }
    if (arr[i] === "L") {
      total--;
    }
    if (total === 0) {
      count++;
    }
  }

  return count;
};
