#!/usr/bin/env node

import calc from '../src/games/brain-calc.js'
import greetPlayer from '../src/cli.js'
import game from '../src/index1.js'

let name = greetPlayer()
game(name, calc)
