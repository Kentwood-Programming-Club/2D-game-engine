import { canvas, ctx } from "./game.js"

// 1 = filled space
// 0 = background
export var map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

export var map_height = map.length
export var map_width = map[0].length

/*
 * Our canvas is 500 x 500,
 * Our map is 10 x 10,
 * so each square must be 50
 * (we're working with pixels here)
 */

let squareSize = 50

export function draw() {
    // here we need to make a 2d loop to go through each position in the map and draw it
    // we can use the ctx.fillRect() method
}
// vlads comment