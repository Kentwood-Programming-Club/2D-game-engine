// this is the file where our game loop is
import { map, draw as drawMap } from "./map.js"
import { player, draw as drawPlayer } from "./player.js"

export let canvas = document.querySelector("#game")
export let ctx = canvas.getContext("2d")

// // we need a loop to update the game 30 times a second
let frameRate = 30 // milliseconds
window.requestAnimationFrame(gameLoop)

function gameLoop() {
    draw()
    setTimeout(() => {
        window.requestAnimationFrame(gameLoop)
    }, frameRate)
}

function draw() {
    drawMap()
    drawPlayer()
}
