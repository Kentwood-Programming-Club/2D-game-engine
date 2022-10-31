import { canvas, ctx } from "./game.js"
import { Keyboard } from "./lib/keyboard.js"

var kb = new Keyboard()

export const player = {
    // player width and height
    height: 2,
    width: 1,

    position: {
        // demo starting pos for player
        x: 1,
        y: 1,
    },
    color: "#FF0000", // Color of the player
}

export function draw() {
    // what goes here?
}

// handle keys
// the first argument is an array of keys,
// the second argument is the event listener type
// the third argument are the functions to be called when that key at that index is pressed.
kb.keymap(["a", "d", "w", "s"], "keydown", [(left, right, up, down)])

function left() {
    // what would go here?
}

function right() {
    // what would go here?
}

function up() {
    // what would go here?
}

function down() {
    // what would go here?
}
