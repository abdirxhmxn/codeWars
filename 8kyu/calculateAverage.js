/**
 * Write a function which calculates the average of the numbers in a given array.
 * Note: Empty arrays should return 0.
 */

function findAverage(array) {
  // your code here
  let len = array.length;
  let sum = 0;
  if(array.length <1){
    return 0;
  }else{
    for(i=0; i<array.length;i++){
    sum+=array[i]
    }
  }
  
  const result = sum/len
  return result; 
}