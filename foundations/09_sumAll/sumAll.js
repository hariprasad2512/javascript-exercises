const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
  if (a > 0 && b > 0) {
    let totalSum = 0;
    start = Math.min(a, b);
    end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
      totalSum += i;
    }
    return totalSum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
