import Phaser from "../../lib/phaser.js";
import { Widget } from "../prefabs/Widget.js";

export class Play extends Phaser.Scene {
    constructor() {
        super("Play");
    }

    create() {
        this.add.text(0, 0, "hello from a class exported by a module");
        this.widget1 = this.add.existing(new Widget(this, 50, 50));
    }

    update(time, delta) {
        this.widget1.update(time, delta);
    }
}