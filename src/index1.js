const game = (name, game) => {
  console.log('What number is missing in the progression?')
  let chosenGame = game
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