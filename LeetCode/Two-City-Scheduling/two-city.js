var twoCitySchedCost = function (costs) {
  // find the total number of people; half the people equals numPeople / 2
  const numPeople = costs.length;

  // loop through costs and map the difference between the two costs in each index
  let map = {};
  for (let i = 0; i < numPeople; i++) {
    map[i] = {
      costA: costs[i][0],
      costB: costs[i][1],
      difference: costs[i][0] - costs[i][1],
    };
  }

  // sort the map by difference
  const arr = Object.entries(map).sort((a, b) => {
    return a[1].difference - b[1].difference;
  });

  // add up costs
  let total = 0;
  for (let i = 0; i < numPeople; i++) {
    if (i < numPeople / 2) {
      total += arr[i][1].costA;
    } else {
      total += arr[i][1].costB;
    }
  }

  return total;
};
