/**
 * Some numbers have interesting properties. For example:
 *
 * 89 --> 8¹ + 9² = 89 * 1
 * 695 --> 6² + 9³ + 5⁴ = 1390 = 695 * 2
 * 46288 --> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 *
 * Given two positive integers n and p, we want to find a positive integer k (if it exists)
 * such that the sum of the digits of n raised to consecutive powers starting from p
 * equals n * k.
 *
 * In other words, writing the consecutive digits of n as a, b, c, d, ...
 * is there an integer k such that:
 *
 *     a^p + b^(p+1) + c^(p+2) + d^(p+3) + ... = n * k
 *
 * If such a k exists, return it. Otherwise, return -1.
 *
 * Note: n and p will always be strictly positive integers.
 *
 * Examples:
 *   n = 89, p = 1  --->  1   (8¹ + 9² = 89 = 89 * 1)
 *   n = 92, p = 1  ---> -1   (no k satisfies 9¹ + 2² = 92 * k)
 *   n = 695, p = 2 --->  2   (6² + 9³ + 5⁴ = 1390 = 695 * 2)
 *   n = 46288, p = 3 ---> 51 (4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51)
 */

function digPow(n, p){
  // ...
  //take in an integer
  //take in a p which is the starting power you raise n by then ++ with each following digit
  //new array to store each value
  let sum = 0
  
  //toString.split('') the number
  n.toString().split('').map(num => {
    sum+=Number(num**p)
    p++;
  })  
  let k = sum/n
  if(Number.isInteger(k)){
    return k;
  }else{
    return -1;
  }
}

console.log(digPow(25, 2)) //-> 29 -> -1
