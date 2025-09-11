import * as THREE from 'three'
import { Game } from './game/Game.js'
import './style.css'

const game = new Game()
game.init()
game.start()
