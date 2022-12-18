"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

setup();

function setup() {
	context.lineWidth = 10;
	context.strokeStyle = "red";
}

/**
 * @param {MouseEvent} enventData
 */

function move(evenData) {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	Utils.drawLine(evenData.pageX, 0, evenData.pageX, height);
	Utils.drawLine(0, evenData.pageY, width, evenData.pageY);
}
