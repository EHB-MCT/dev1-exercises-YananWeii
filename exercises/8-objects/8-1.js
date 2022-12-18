"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;
let balloons = [];

setup();
update();

function setup() {
    context.lineWidth = 4;
    for (let i = 0; i < 100; i++) {
        let balloon = {
            x: Utils.randomNumber(0, width),
            y: height + Utils.randomNumber(0, 200),
            speed: Utils.randomNumber(1, 10),
            hue: Utils.randomNumber(0, 40)
        };
        balloons[i] = balloon;
    }
}

function update() {


    context.fillStyle = "#6eceff";
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < balloons.length; i++) {
        let balloon = balloons[i];
        balloon.y -= balloon.speed;
        drawBalloon(balloon.x, balloon.y, balloon.hue);
    }

    requestAnimationFrame(update);

}

function drawBalloon(x, y, hue) {
    context.fillStyle = Utils.hsl(hue, 100, 50);
    Utils.fillEllipse(x, y - 100, 30, 50);
    Utils.drawLine(x, y - 50, x, y);
}