/**
 * Given an array of integers.
 * Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
 * If the input is an empty array or is null, return an empty array.
 * 
 * Example
 * For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
 */

function countPositivesSumNegatives(input) {
    // your code here
    //input is an array of integers (+)(-)
    //return an array of 2 numbers which is the count of the (+)s and the sum of the (-)s
    let positiveSum = 0
    let negativeSum = 0
    let result = []
    if (!input || input.length < 1) {
        return result;
    }
    //loop through the input
    input.forEach(num => {
        if (num > 0) {
            positiveSum += 1
        } else if (num < 0) {
            negativeSum += num
        }
    });

    result.push(positiveSum, negativeSum)
    return result
}
console.log(countPositivesSumNegatives([1, 3, 5, -4, -9])) //--> [3, -13]