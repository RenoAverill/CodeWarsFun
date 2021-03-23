function findUniq(arr) {
  // do magic
  let answer = 0
  arr = arr.sort()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      answer = (arr.pop())
      return answer
    }else {
      answer = (arr[0])
      return answer
    }
  }
}
