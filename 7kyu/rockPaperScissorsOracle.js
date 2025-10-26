/**
 * You are the rock paper scissors oracle.
 * Famed throughout the land, you have the incredible ability to predict which hand gestures your opponent will choose out of rock, paper and scissors.
 * Unfortunately you're no longer a youngster, and have trouble moving your hands between rounds. For this reason, you can only pick a single gesture for each opponent. If it's possible for you to win, you will, but you're also happy to tie.
 * Given an array of gestures — for example ["paper", "scissors", "scissors"] — return the winning gesture/s in the order in which they appear in the title, separated by a forward slash. For example, if rock and scissors could both be used to win you would return:
 * "rock/scissors"
 * If it's not possible for you to win then return:
 * "tie"
 * See https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors if you're not familiar with rock paper scissors.
 * Second attempt at my first Kata...
 */
function oracle(gestures) {
  //work your magic here
  let results = [0,0,0]     //[rock,paper,scissors]
  let answer =[]
  
  
  for(let i=0; i < gestures.length; i++){
    if (gestures[i] === 'paper'){
      results[0] -= 1
      results[2] += 1
    } else if (gestures[i] === 'rock') {
      results[1] += 1
      results[2] -= 1
    } else if (gestures[i] === 'scissors') {
      results[0] += 1
      results[1] -= 1
    }
  }
  
  console.log('Scissors: ', results[2])
  console.log('Paper: ', results[1])
  console.log('Rock: ', results[0])
  
  // return combined results
  if ( results[0] > 0) {
    answer.push('rock')
  } 
  if (results[1] > 0) {
    answer.push('paper')
  }
  if (results[2] > 0) {
    answer.push('scissors')
  }
  if (results[0]===0 && results[1]===0 && results[2] === 0){
    return 'tie'
  }
    
  return answer.join('/')
}
