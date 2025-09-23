function solution(str, ending){
  // TODO: complete
  if(str.substring(str.length-ending.length) === ending){
    return true
  }else{
    return false
  }
}