/**
 * Star-Field
 * Aliyah
 * 
 * Draws a star field with a for-loop
 */

"use strict";

const numstars = 200;

/**
 * sets up the canvas
*/
function setup() {
    createCanvas(700, 700)
}


/**
 * Draws the star-field
*/
function draw() {
    background(0);

    randomSeed(1);
    for (let i = 0; i < numstars; i++) {
        drawStar();
    }
}

function drawStar() {
    const x = random(0, width);
    const y = random(0, height);
    const diameter = random(2, 5);

    push();
    fill(255);
    noStroke();
    ellipse(x, y, diameter);
    pop();
}