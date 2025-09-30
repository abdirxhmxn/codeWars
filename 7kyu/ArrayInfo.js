//Worked on as a group: Godwin, Mau, Leanne, Fadma, Karlee, Sherrel, and myself

/**
 * 
 * Brief
 * Sometimes we need information about the list/arrays we're dealing with. You'll have to write such a
 * function in this kata. Your function must provide the following informations:
 * Length of the array
 * Number of integer items in the array
 * Number of float items in the array
 * Number of string character items in the array
 * Number of whitespace items in the array
 * The informations will be supplied in arrays that are items of another array. Like below:
 * Output array = [[array length],[no of integer items],[no of float items],[no of string chars items],[no of
 * whitespace items]]
 * 
 * Added Difficulty
 * If any item count in the array is zero, you'll have to replace it with a None/nil/null value (according to
 * the language). And of course, if the array is empty then return 'Nothing in the array!. For the sake of
 * simplicity, let's just suppose that there are no nested structures.
 * Output ====== If you're head is spinning (just kidding!) then these examples will help you out-
 * 
 * array_info([1,2,3.33,4,5.01,'bass','kick',' '])--------->[[8],[3],[2],[2],[1]]    
 * array_info([0.001,2,' '])------------------------------>[[3],[1],[1],[None],[1]]   
 * array_info([])----------------------------------------->'Nothing in the array!'
 * array_info([' '])-------------------------------------->[[1],[None],[None],[None],[1]]
 * 
 * 
 * Remarks
 * The input will always be arrays/lists. So no need to check the inputs.
 * Hint ==== See the tags!!!
 * Now let's get going !
 */
function arrayInfo(arr){
  //your code here
  const arrayLen = arr.length
  
  let result = []
  //number of integers
  let sumInt = 0;
  //number of float items in the array
  let sumFloat = 0;
  //number of string characters
  let sumString = 0;
  //number of white space in the array
  let sumWhiteSpace = 0;
  
  //went back and changed it to filter for extra practice (the filter was done solo)
  arr.filter(item => {
    if(typeof item === 'number'){
      if(Number.isInteger(item)){
        sumInt ++;
      }else{
        sumFloat ++;
      }
    }else if(typeof item === 'string'){
      if(item === ' ' ){
        sumWhiteSpace ++;
      }else{
        sumString ++;
      }
      }
  });
  
/**
* Original Solution with group
*/  
//for loop through the array
//   for(let i = 0; i<arr.length; i++){
//     //if typeof arr[i] === 'number'
//     if(typeof arr[i] === 'number' && Number.isInteger(arr[i])){
//       sumInt +=1;
//     } else if(typeof arr[i] === 'number' && !Number.isInteger(arr[i])){
//       sumFloat +=1;
//     }else if(typeof arr[i] === 'string' && arr[i] !== ' '){
//       sumString +=1;
//     }else if( arr[i] === ' ' ){
//       sumWhiteSpace +=1;
//     }
//   }
  
  if(arrayLen === 0 ){
    return 'Nothing in the array!'
  }
  
  if(sumInt === 0){
    sumInt = null
  }
  if(sumFloat === 0){
    sumFloat = null
  }
  if(sumString === 0){
    sumString = null
  }
  if(sumWhiteSpace === 0){
    sumWhiteSpace = null
  }
  //push everything into empty array
  result.push([arrayLen], [sumInt], [sumFloat], [sumString], [sumWhiteSpace])
  
  return result
}