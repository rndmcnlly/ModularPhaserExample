# ModularPhaserExample

This project attempts to illustrate the use of ES6 modules in a Phaser game without the use of build tools. I'm assuming you are editing this project in VSCode and previewing `index.html` using the Live Server extension.

Key ideas:
- hack the first and last few lines of `phaser.js` to use the `export` keyword
- only use a script tag: `<script type="module" src="src/main.js"></script>`
- have most components of the game start with a line like `import Phaser from "../../lib/phaser.js";`

What works:
- You can play the game in the browser without running any build tools!
- When you try to use something exported in one module in another, the editor will write the `import` line for you.
- The editor will appropriately propagate changes to filenames or exported symbols to other files that depend on them.
- JSDoc comments (at least for new modules) show the editor as expected.

What doesn't:
- The editor doesn't discover the symbols of documention for the contents of `phaser.js`. This is particularly frustrating because this is the main benefit I was trying to get in this experiment.