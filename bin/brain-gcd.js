#!/usr/bin/env node

import gcd from '../src/games/brain-gcd.js'
import greetPlayer from '../src/cli.js'
import game from '../src/index1.js'

let name = greetPlayer()
game(name, gcd)
