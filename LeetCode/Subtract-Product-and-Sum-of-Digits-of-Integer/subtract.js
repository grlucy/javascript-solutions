var subtractProductAndSum = function (n) {
  let x = n.toString().split("");
  let product = Number(x[0]);
  let sum = Number(x[0]);
  if (x.length > 1) {
    for (let i = 1; i < x.length; i++) {
      product *= Number(x[i]);
      sum += Number(x[i]);
    }
  }
  return product - sum;
};
