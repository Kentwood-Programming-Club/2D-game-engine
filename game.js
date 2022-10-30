// this is the file where all the code goes
import { Keyboard } from "./lib/keyboard";

let wasd = ["a", "d", "w", "s"] // left, right, up, down

let kb = new Keyboard()
kb.keymap(wasd, [left, right, up, down])

var left = () => console.log("left")
var right = () => console.log("right")
var up = () => console.log("up")
var down = () => console.log("down")