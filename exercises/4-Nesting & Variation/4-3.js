"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as noise from "../../scripts/noise.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawAnotherbrickinthewall();

function drawAnotherbrickinthewall() {
	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 3; j++) {
			context.fillStyle = Utils.hsl(5, 200, 25);
			context.fillRect(50 + i * 220, 50 + j * 220, 210, 100);
		}
	}
	for (let i = 0; i < 6; i++) {
		for (let j = 0; j < 3; j++) {
			context.fillStyle = Utils.hsl(5, 200, 25);
			context.fillRect(150 + i * 220, 160 + j * 220, 210, 100);
		}
	}
}
