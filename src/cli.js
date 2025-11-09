import readlineSync from 'readline-sync'

const greetPlayer = () => {
  let name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  return name
}

export default greetPlayer
