"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let numberOfEnemies = 10;
let gameOver = false;
let hasWon = false;

let player = {
	x: 0,
	y: 0,
	size: 20,
	hue: 0,
};

let enemies = [];

window.onmousemove = mouseMove;

setup();
update();

function setup() {
	context.textAlign = "center";
	context.font = "bold 64pt Arial";

	for (let i = 0; i < numberOfEnemies; i++) {
		let enemy = {
			x: Utils.randomNumber(0, width),
			y: Utils.randomNumber(0, height),
			size: Utils.randomNumber(2, 40),
			hue: Utils.randomNumber(0, 360),
		};
		enemies[i] = enemy;
	}
}

function update() {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	console.log(enemies.length);
	if (enemies.length == 0) {
		gameOver = true;
		hasWon = true;
	} else {
		for (let i = 0; i < enemies.length; i++) {
			let enemy = enemies[i];
			enemy.x += Utils.randomNumber(-5, 5);
			enemy.y += Utils.randomNumber(-5, 5);
			context.fillStyle = Utils.hsl(enemy.hue, 100, 50);
			Utils.fillCircle(enemy.x, enemy.y, enemy.size);
			let distance = Utils.calculateDistance(
				player.x,
				player.y,
				enemy.x,
				enemy.y
			);
			if (distance <= player.size + enemy.size) {
				if (player.size >= enemy.size) {
					enemies.splice(i, 1);
					player.size += 10;
					player.hue = enemy.hue;
				} else {
					gameOver = true;
					break;
				}
			}
		}
	}

	context.fillStyle = Utils.hsl(player.hue, 100, 50);
	Utils.fillCircle(player.x, player.y, player.size);

	if (!gameOver) {
		requestAnimationFrame(update);
	} else {
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);
		context.fillStyle = "black";
		if (hasWon) {
			context.fillText("YOU WON", width / 2, height / 2);
		} else {
			context.fillText("GAME OVER", width / 2, height / 2);
		}
	}
}

/**
 *
 * @param {MouseEvent} e
 */
function mouseMove(e) {
	player.x = e.pageX;
	player.y = e.pageY;
}
