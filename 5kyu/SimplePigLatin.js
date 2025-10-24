/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 * Examples
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */

function pigIt(str){
  //Code here
   let letter = []
   let final = []
   let arr = str.split(' ').map(word =>{
     if(word === '!' || word === '.' || word === '?'){
        let char = word.split('')
        letter.push(char[0])
        char.shift()
        char.push(`${letter[0]}`)
        letter.shift()
        final.push(char.join(''))
     }else{
      let char = word.split('')
      letter.push(char[0])
      char.shift()
      char.push(`${letter[0]}ay`)
      letter.shift()
      final.push(char.join(''))
     }
     console.log(final)
   }).join(' ')
   
   let result = final.toString().split(',').join(' ')
   
   return result;
}
