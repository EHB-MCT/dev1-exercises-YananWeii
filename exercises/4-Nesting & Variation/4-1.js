"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

context.fillStyle = "orange";
context.fillRect(0, 0, 600, 300);

drawLines();

function drawLines() {
	context.strokeStyle = "white";
	for (let i = 0; i <= 60; i++) {
		Utils.drawLine(i * 10, 0, 300, 150);
		Utils.drawLine(i * 10, 300, 300, 150);
	}
	for (let i = 1; i < 30; i++) {
		Utils.drawLine(0, i * 10, 300, 150);
		Utils.drawLine(600, i * 10, 300, 150);
	}
}
