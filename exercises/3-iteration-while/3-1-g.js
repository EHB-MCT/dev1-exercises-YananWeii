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
	let i = 0;
	while (i < 10) {
		Utils.fillCircle(i * 50, i * 50, i * 20);
	}
}
