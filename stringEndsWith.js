function solution(str, ending){
  // TODO: complete
  let i = ending.length
  let last = str.substr(-i)
  if (ending == '') {
    return true
  }else if (ending == last) {
    return true
  }
  return false
}