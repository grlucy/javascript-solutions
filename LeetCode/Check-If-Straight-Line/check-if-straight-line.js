var checkStraightLine = function (coordinates) {
  // calculate slope
  const rise = coordinates[1][1] - coordinates[0][1];
  const run = coordinates[1][0] - coordinates[0][0];
  const slope = rise / run;
  // check whether points have constant slope
  for (let i = 2; i < coordinates.length; i++) {
    const newRise = coordinates[i][1] - coordinates[i - 1][1];
    const newRun = coordinates[i][0] - coordinates[i - 1][0];
    if (newRise / newRun !== slope) {
      return false;
    }
  }
  return true;
};
