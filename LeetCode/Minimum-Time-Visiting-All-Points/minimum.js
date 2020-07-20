var minTimeToVisitAllPoints = function (points) {
  let current = points[0];
  let seconds = 0;

  if (points.length > 1) {
    for (let i = 0; i < points.length; i++) {
      let target = points[i];

      while (current[0] !== target[0] || current[1] !== target[1]) {
        // move horizontally
        if (current[0] < target[0]) {
          current[0]++;
        } else if (current[0] > target[0]) {
          current[0]--;
        }
        // move vertically
        if (current[1] < target[1]) {
          current[1]++;
        } else if (current[1] > target[1]) {
          current[1]--;
        }
        seconds++;
      }
    }
  }
  return seconds;
};
