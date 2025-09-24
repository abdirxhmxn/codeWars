//Find the number with the most digits.

//If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  //code goes here
  //first element is the start point
  let result = array[0];
  //use a for each to loop through all elements
  array.forEach(x => {
    //conditional to see when each element is converted to a string if one is greater than the other
    if(result.toString().length < x.toString().length){
      //if so then reassign the variable
      result = x;
    }
  });
  //return result
  return result;
}