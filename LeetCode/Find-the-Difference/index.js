/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map = {};
  t.split("").forEach((ltr) => {
    map[ltr] ? map[ltr]++ : (map[ltr] = 1);
  });
  s.split("").forEach((ltr) => {
    map[ltr]--;
  });
  const filtered = Object.entries(map).filter((arr) => arr[1] > 0);
  return filtered[0][0];
};
