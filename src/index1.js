import even from './games/brain-even.js'
import calc from './games/brain-calc.js'
import gcd from './games/brain-gcd.js'
import progression from './games/brain-progression.js'
import prime from './games/brain-prime.js'

const game = (name, games) => {
  let chosenGame = games
  switch (games) {
    case even:
      console.log('Answer "yes" if the number is even, otherwise answer "no".')
      break
    case calc:
      console.log('What is the result of the expression?')
      break
    case gcd:
      console.log('Find the greatest common divisor of given numbers.')
      break
    case progression:
      console.log('What number is missing in the progression?')
      break
    case prime:
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