function removeEveryOther(arr){
  //your code here
 let count = 1;
  while (count<arr.length){
    arr.splice(count, 1)
    count++
  }
  return arr
}