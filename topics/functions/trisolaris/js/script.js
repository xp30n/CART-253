/**
 * Trisolaris
 * Aliyah R.W.
 * 
 * Draws the three suns of Trisolaris. Poorly.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 400);
}

/**
 * Draw the three suns
 */
function draw() {
    // Sky blue
    background("#87ceeb");

    drawSun(500, 100, 80);
    drawSun(350, 180, 200);
    drawSun(120, 100, 160);
    drawSun(400, 300, 10);
}

// The order of the numbers matters, javascript will read them based on the order that you put the variables in

function drawSun(x, y, size) {
    push();
    noStroke();
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}

// instead of making three draw functions that are similar but with different x, y and sizes, you can just call different three different suns, and give them the right parameters. Because the rest of the information is the same (fill, stroke, push & pop)

// now we've created a way to shorten our code!! 