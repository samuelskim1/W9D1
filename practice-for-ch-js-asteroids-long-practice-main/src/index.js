import MovingObject from "./moving_object.js"
window.MovingObject = MovingObject

console.log("Webpack is working");

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("game-canvas")
    const ctx = canvas.getContext("2d")
    window.ctx = ctx
})