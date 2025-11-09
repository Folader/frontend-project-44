import readlineSync from 'readline-sync'

const progression = (dif, length, startNum) => {
  let result = []
  for (let i = 0; i < length; i++) {
    let nextNum = startNum + i * dif
    result.push(nextNum)
  }
  return result
}

const progressionGame = () => {
  const dif = Math.floor(Math.random() * 100)
  const lengthProgression = Math.floor(Math.random() * 5 + 5)
  const startNum = Math.floor(Math.random() * 20 + 1)
  const deleteNum = Math.floor(Math.random() * lengthProgression)
  let gameProgression = progression(dif, lengthProgression, startNum)
  const correctAnswer = gameProgression[deleteNum]
  gameProgression[deleteNum] = '..'
  console.log(`Question: ${gameProgression.join(' ')}`)
  let answer = Number(readlineSync.question('Your answer: '))
  let result = answer === correctAnswer
  return { result, correctAnswer, answer }
}

export default progressionGame
