import readlineSync from 'readline-sync'

const gcd = (a, b) => {
  let c
  while (b !== 0) {
    c = b
    b = a % b
    a = c
  }
  return a
}

const gcdGame = () => {
  const numberOne = Math.floor(Math.random() * 100)
  const numberTwo = Math.floor(Math.random() * 100)
  console.log(`Question: ${numberOne} ${numberTwo}`)
  let answer = readlineSync.question('Your answer: ')
  const correctAnswer = gcd(numberOne, numberTwo)
  let result = Number(answer) === correctAnswer
  return { result, correctAnswer, answer }
}

export default gcdGame
