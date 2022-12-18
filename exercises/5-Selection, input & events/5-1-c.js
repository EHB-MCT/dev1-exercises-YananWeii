"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
         if (x > width / 4 * 3) {
            context.fillStyle = "yellow";
        } else if (x > width / 4) {
            context.fillStyle = "white";
        } else {
            context.fillStyle = "red";
        }
         Utils.fillCircle(x, y, 2);
    }
}