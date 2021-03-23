function numberToPower(number, power){
  // Code here
  let answer = number
  if (power === 0) {
    return 1
  }
  while (power > 1) {
    answer *= number
    power--
  }return answer
}