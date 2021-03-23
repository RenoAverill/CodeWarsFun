function arrayMadness(a, b) {
  // Ready, get set, GO!!!
  const sum1 = a.reduce((acc, currentValue) => acc + Math.pow(currentValue, 2), 0);
  const sum2 = b.reduce((total, current) => total + Math.pow(current, 3), 0);
  let answer = (sum1 > sum2) ? true : false;
  return answer
}
