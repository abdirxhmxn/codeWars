function digitize(n) {
  //code here
  let strNum = n.toString()
  return strNum.split('').reverse().map(Number)
}