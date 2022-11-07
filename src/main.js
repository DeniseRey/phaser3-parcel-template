import Phaser from 'phaser'

import { Preloads } from "./scenes/preloads";
import { Black } from "../src/scenes/Inicio.js";
import { MainMenu } from "../src/scenes/MainMenu.js";
import { Tuto } from "../src/scenes/Tutorial.js";
import { Creditos } from "../src/scenes/Creditos.js";
import { Inter } from "../src/scenes/Inter.js";
import { Lost } from './scenes/lost';
import { Win } from './scenes/win';
import { Juego } from './scenes/Juego';

const config = {
	type: Phaser.AUTO,
  width: 640,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 740,
      height: 640,
    },
    max: {
      width: 1040,
      height: 940,
    }
  },
  physics: {
    default: "arcade",
    arcade: {
      
      debug: true,
    },
  },
	scene: [ Preloads, Black, MainMenu, Tuto, Creditos, Inter, Juego, Lost, Win]
}

export default new Phaser.Game(config)
