/**
*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
*
*If you want to know more: http://en.wikipedia.org/wiki/DNA
*
*In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
*
*More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
*
*Example: (input --> output)
*
*"ATTGC" --> "TAACG"
*"GTAT" --> "CATA"
*/
function dnaStrand(dna){
  //dna sequence input
  //return the matching pair to it
  console.log(dna)
  let arr = dna.split('')
  console.log(arr)
  //for loop
  for(let i=0; i<arr.length; i++){
    if(arr[i] === 'T'){
        arr[i] = 'A'
    } else if(arr[i] === 'A'){
        arr[i] = 'T'
    } else if(arr[i] === 'G'){
        arr[i] = 'C'
    } else if(arr[i] === 'C'){
        arr[i] = 'G'
    }
  }
  return arr.join('')

}
console.log(dnaStrand("ATTCGA")) //--> "TAAGCT"

