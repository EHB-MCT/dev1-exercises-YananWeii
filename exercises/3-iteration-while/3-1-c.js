"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
drawLines();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
}

function drawLines() {
	let i = 0;
	while (i < 5) {
		let step = 150 + 25 * i;
		Utils.drawLine(50, step, 350, step);
		Utils.drawLine(step, 30, step, 350);
		i++;
	}
}
