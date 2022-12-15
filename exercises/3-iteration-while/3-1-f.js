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
	let i = 0;
	while (i < 7) {
		context.lineWidth = 2;
		context.strokeStyle = "white";
		context.fillRect(55, 55, 200, 200);
		i++;
	}
}
