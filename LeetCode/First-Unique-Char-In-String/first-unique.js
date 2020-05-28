var firstUniqChar = function (s) {
  let o = {};
  for (let i = 0; i < s.length; i++) {
    if (o[s[i]]) {
      o[s[i]].count++;
    } else {
      o[s[i]] = {
        firstIndex: i,
        count: 1,
      };
    }
  }
  for (let [key, value] of Object.entries(o)) {
    if (value.count === 1) {
      return value.firstIndex;
    }
  }
  return -1;
};
