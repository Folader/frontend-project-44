#!/usr/bin/env node

import even from '../src/games/brain-even.js'
import greetPlayer from '../src/cli.js'
import game from '../src/index1.js'

let name = greetPlayer()
game(name, even)
