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
		Utils.strokeCircle(50, 50, i * 15);
		Utils.strokeCircle(350, 50, i * 15);
		Utils.strokeCircle(50, 350, i * 15);
		Utils.strokeCircle(350, 350, i * 15);
		i++;
	}
}
