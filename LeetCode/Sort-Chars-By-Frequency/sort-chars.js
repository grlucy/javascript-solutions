var frequencySort = function (s) {
  // create map of letters and number of instances
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > 0) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  // sort
  const arr = Object.entries(map);
  arr.sort((a, b) => b[1] - a[1]);

  // generate output
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    let letter = arr[i][0];
    let x = arr[i][1];
    for (let j = 1; j <= x; j++) {
      output += letter;
    }
  }
  return output;
};
