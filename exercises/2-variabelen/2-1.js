"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

let width = context.canvas.width;
let height = context.canvas.height;

//let randomX = Math.floor(Math.random() * (width - size));
//let randomY = Math.floor(Math.random() * (height - size));

randomColours(50, 800);
randomColours(100, 700);
randomColours(150, 600);
randomColours(200, 500);
randomColours(250, 400);
randomColours(300, 300);
randomColours(350, 200);
randomColours(400, 100);

function randomColours(pos, size) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    console.log(r, g, b);

    let color = "rgb(" + r + "," + g + "," + b + ")";
    context.fillStyle = color;
    context.fillRect(pos, pos, size, size);

}