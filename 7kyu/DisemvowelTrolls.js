/**
 * Trolls are attacking your comment section!
 * 
 * A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
 * 
 * Your task is to write a function that takes a string and return a new string with all vowels removed.
 * 
 * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 * 
 * Note: for this kata y isn't considered a vowel.
 * */

function disemvowel(str) {
//   //use the .split('') to turn the string into an array
//   let newStr = str.split('')
//   //loop through the array and filter out letters that are not vowels
//   let result = newStr.filter(chr => !'aeiouAEIOU'.includes(chr)).join('')
//   return result;
     return str.replace(/[aeiou]/gi, '')
  //g is for global (looks for all instances of it)
  //i means it is case-insensitive
}