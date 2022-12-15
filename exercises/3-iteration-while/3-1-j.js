"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();
drawCircle();

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "#3498DB";
	context.fillRect(50, 50, 300, 300);
}

function drawCircle() {
	let i = 1;
	while (i <= 10) {
		Utils.strokeCircle(200, 200, i * 15);
		Utils.strokeCircle(100, 200, i * 15);
		Utils.strokeCircle(300, 200, i * 15);
		i++;
	}
}
