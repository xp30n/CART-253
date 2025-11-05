/**
 * Gradient
 * Aliyah
 * 
 * Draws a gradient out of lines
 * 

"use strict";

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(600, 300)
}


/**
 * Draws a gradient
*/
function draw() {
    background(0);

    for (let x = 0; x <= width; x++) {
        const shade = map(x, 0, width, 0, 255);

        push();
        stroke(shade);
        line(x, 0, x, height);
        pop();
    }
}