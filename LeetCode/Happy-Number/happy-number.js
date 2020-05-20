var isHappy = function (n) {
  if (n <= 0) {
    return false;
  }

  let unhappy = true;
  let nSet = new Set([n]);
  let str = n.toString();

  function sumSquares(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
      sum += Math.pow(parseInt(string[i]), 2);
    }
    return sum;
  }

  while (unhappy) {
    let newNum = sumSquares(str);
    if (newNum === 1) {
      return true;
    }
    if (nSet.has(newNum)) {
      return false;
    }
    nSet.add(newNum);
    str = newNum.toString();
  }
};
