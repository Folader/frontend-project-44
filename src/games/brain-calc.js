import readlineSync from 'readline-sync'

const calc = () => {
  const numberOne = Math.floor(Math.random() * 100)
  const numberTwo = Math.floor(Math.random() * 100)
  const operationNumber = Math.floor(Math.random() * 2)
  let allOperation = ['+', '-', '*']
  let selectedOperation = allOperation[operationNumber]
  console.log(`Question: ${numberOne} ${selectedOperation} ${numberTwo}`)
  let answer = readlineSync.question('Your answer: ')
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  }
  const correctAnswer = operations[selectedOperation](numberOne, numberTwo)
  let result = Number(answer) === correctAnswer
  return { result, correctAnswer, answer }
}

export default calc
