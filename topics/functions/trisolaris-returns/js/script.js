/**
 * Trisolaris Returns (get it?)
 * Aliyah R. W
 * 
 * Draws the three suns of Trisolaris. Calculate their colour
 * based on their parameters.
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
}

/**
 * Draws a Trisolarian sun
 */
function drawSun(x, y, size) {
    let weight = calculateStrokeWeight(x, y);

    push();
    strokeWeight(weight);
    stroke("#ffff00");
    fill("#f99736");
    ellipse(x, y, size);
    pop();
}

function calculateStrokeWeight(x, y) {
    // Calculate the stroke weight of the sun based on
    // the distance of the mouse position
    const minWeight = 1;
    const maxWeight = 20;
    let d = dist(mouseX, mouseY, x, y);
    let result = map(d, 0, width, maxWeight, minWeight);

    return result; // return means take whatever value i am going to give you and send it back when someone calls the function
}

// the "calculate stroke weight" functin just makes our code easier to read and understand. This helps to break down our code into a coherent unit! 