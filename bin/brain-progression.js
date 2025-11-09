#!/usr/bin/env node

import progression from '../src/games/brain-progression.js'
import greetPlayer from '../src/cli.js'
import game from '../src/index1.js'

let name = greetPlayer()
game(name, progression)
