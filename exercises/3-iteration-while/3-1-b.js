"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
drawGrid();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
}

function drawGrid() {
	//Utils.drawLine(75, 75, 325, 75);
	//Utils.drawLine(75, 125, 325, 125);
	// Utils.drawLine(75, 325, 75, 75);
	//Utils.drawLine(75, 325, 75, 75);

	let i = 0;
	while (i < 6) {
		let x = 75 + i * 50;
		let y = x;
		Utils.drawLine(75, y, 325, y);
		Utils.drawLine(x, 75, x, 325);
		i = i + 1;
	}
}
