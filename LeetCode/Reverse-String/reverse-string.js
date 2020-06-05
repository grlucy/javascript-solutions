var reverseString = function (s) {
  let len = s.length;
  let j = len - 1;
  for (let i = 0; i < len - 1; i++) {
    let x = s.splice(0, 1);
    s.splice(j, 0, x[0]);
    j--;
  }
};
