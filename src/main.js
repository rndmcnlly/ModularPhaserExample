import Phaser from "../lib/phaser.js";
import { Play } from "./scenes/Play.js";

let game = new Phaser.Game({
    width: 640,
    height: 480,
    scene: Play
});