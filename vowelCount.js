function getCount(str) {
  var vowelsCount = 0;
  
  // enter your majic here
  for (let i of str) {
    if (i == 'a' || i == 'e' ||
        i == 'i' || i == 'o' ||
        i == 'u') {
      vowelsCount++
    }
  }
  return vowelsCount;
}