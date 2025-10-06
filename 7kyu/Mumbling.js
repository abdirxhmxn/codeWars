/*
This time no story, no theory.
The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(s) {
	// your code
  //loop through the array
  let newString = s.split('').map((char, i) => {
    return char.toUpperCase() + char.toLowerCase().repeat(i)
  })
    return newString.join('-');
}
