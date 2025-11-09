#!/usr/bin/env node

import prime from '../src/games/brain-prime.js'
import greetPlayer from '../src/cli.js'
import game from '../src/index1.js'

let name = greetPlayer()
game(name, prime)
