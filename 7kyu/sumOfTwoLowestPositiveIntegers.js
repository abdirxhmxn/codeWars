/**
 * Create a function that returns the sum of the two lowest 
 * positive numbers given an array of minimum 4 positive integers. 
 * No floats or non-positive integers will be passed.
 * For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 * 
 * [10, 343445353, 3453445, 3453545353453] should return 3453455
 * */

function sumTwoSmallestNumbers(numbers) {  
  // Code here
  //sort the array
  numbers.sort((a, b) => a - b)
  //create a sum variable
  let sum = 0;
  //loop through that  array and add
  numbers.slice(0,2).forEach(char =>{
    sum+=char
  })
  return sum
}