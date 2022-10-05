"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawLine();

function drawLine() {
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = 'red';
    context.moveTo(10, 10);
    context.lineTo(25, 25);
    context.lineTo(40, 10);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = 'red';
    context.moveTo(25, 25);
    context.lineTo(25, 45);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = 'yellow';
    context.moveTo(45, 45);
    context.lineTo(58, 15);
    context.lineTo(70, 45);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = 'yellow';
    context.moveTo(65, 30);
    context.lineTo(50, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = 'black';
    context.moveTo(85, 45);
    context.lineTo(85, 15);
    context.lineTo(105, 40);
    context.lineTo(105, 10);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = 'green';
    context.moveTo(120, 45);
    context.lineTo(130, 15);
    context.lineTo(140, 45);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = 'green';
    context.moveTo(135, 30);
    context.lineTo(125, 30);
    context.stroke();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = 'blue';
    context.moveTo(155, 45);
    context.lineTo(155, 15);
    context.lineTo(175, 40);
    context.lineTo(175, 10);
    context.stroke();


}