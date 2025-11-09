import readlineSync from 'readline-sync'
import even from './games/brain-even.js'
import calc from './games/brain-calc.js'
import gcd from './games/brain-gcd.js'
import progression from './games/brain-progression.js'
import prime from './games/brain-prime.js'

const game = (name) => {
  let gameName = readlineSync.question('В какую игру хочешь сыграть? ')
  let chosenGame
  switch (gameName) {
    case 'even':
      chosenGame = even
      console.log('Answer "yes" if the number is even, otherwise answer "no".')
      break
    case 'calc':
      chosenGame = calc
      console.log('What is the result of the expression?')
      break
    case 'gcd':
      chosenGame = gcd
      console.log('Find the greatest common divisor of given numbers.')
      break
    case 'prog':
      chosenGame = progression
      console.log('What number is missing in the progression?')
      break
    case 'prime':
      chosenGame = prime
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
      break
  }
  for (let i = 0; i < 3; i++) {
    let { result, correctAnswer, answer } = chosenGame()
    if (result) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
      return
    }
  }
  return console.log(`Congratulations, ${name}!`)
}

export default game
