#!/usr/bin/env node

import gcd from '../src/games/brain-gcd.js'
import greetPlayer from '../src/cli.js'

const game = (name) => {
  console.log('Find the greatest common divisor of given numbers.')
  let chosenGame = gcd
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

let name = greetPlayer()
game(name)

export default game
