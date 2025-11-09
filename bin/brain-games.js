#!/usr/bin/env node

import greetPlayer from '../src/cli.js'
import game from '../src/index.js'

console.log('Welcome to the Brain Games!')
let name = greetPlayer()
game(name)
