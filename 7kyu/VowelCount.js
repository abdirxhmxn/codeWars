/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  let sum = 0;
  //split the string into an array
  let newString = str.split('')
  //loop through it to compare each char to a vowel
  newString.forEach(char => {
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
      //increment sum if true
      sum++;
    }
  })
  return sum;
}
