import readlineSync from 'readline-sync'

const prime = (number) => {
  let i = 2
  while (i ** 2 <= number) {
    if (number % i === 0) {
      return false
    }
    i++
  }
  return true
}

const primeGame = () => {
  const number = Math.floor(Math.random() * 1000)
  console.log(`Question: ${number}`)
  let answer = readlineSync.question('Your answer: ')
  let isPrime = prime(number)
  const correctAnswer = isPrime ? 'yes' : 'no'
  let result = answer === correctAnswer
  return { result, correctAnswer, answer }
}

export default primeGame
