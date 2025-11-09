#!/usr/bin/env node

import progression from '../src/games/brain-progression.js'
import greetPlayer from '../src/cli.js'

const game = (name) => {
  let chosenGame = progression
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
