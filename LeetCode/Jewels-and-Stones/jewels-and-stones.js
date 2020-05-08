var numJewelsInStones = function (J, S) {
  let T = 0;
  const Jarray = J.split("");
  for (let i = 0; i < S.length; i++) {
    if (Jarray.indexOf(S[i]) !== -1) {
      T++;
    }
  }
  return T;
};
