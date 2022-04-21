import Phaser from "../../lib/phaser.js";

/** It's a freakin widget! */
export class Widget extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y) {
        super(scene, x, y, 20, 20, 0xFFFFFF);
    }

    update(time, delta) {
        this.angle += 360 * delta / 1000.0
    }
}