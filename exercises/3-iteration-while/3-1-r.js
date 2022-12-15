"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
drawEllipses();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "black";
	context.fillStyle = "black";
	context.strokeRect(50, 50, 300, 300);
}

function drawEllipses() {
	let i = 0;
	while (i < 6) {
		context.fillStyle = Utils.hsla(0, 0, 100 - 20 * i, 100);
		Utils.fillEllipse(200, 200, 25 + i * 25, 150 - i * 25);
		Utils.strokeEllipse(200, 200, 25 + i * 25, 150 - i * 25);
		i++;
	}
}
