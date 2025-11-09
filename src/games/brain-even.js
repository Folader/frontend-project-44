import readlineSync from 'readline-sync'

const even = () => {
  const number = Math.floor(Math.random() * 100)
  console.log(`Question: ${number}`)
  let answer = readlineSync.question('Your answer: ')
  let isEven = number % 2 === 0
  const correctAnswer = isEven ? 'yes' : 'no'
  let result = answer === correctAnswer
  return { result, correctAnswer, answer }
}

export default even
