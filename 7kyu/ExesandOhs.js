/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    //code here
  const check = str.toLowerCase().split('')
  let oCount = 0;
  let xCount = 0;
  let count = 0;
  let empty = 0;
  let i = 0;
  while(count < check.length){
    if(check[i] === 'o'){
      oCount++;
    }else if(check[i]==='x'){
      xCount++;
    }else{
      empty++;
    }
    count++
    i++
  }
  
  if(xCount === oCount || empty === check.length){
    return true;
  }else {
    return false
  }
}
