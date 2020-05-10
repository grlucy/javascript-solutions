var isPerfectSquare = function (num) {
  if (num >= 0) {
    for (let i = 0; i <= num; i++) {
      if (i * i === num) {
        return true;
      }
    }
  }
  return false;
};
