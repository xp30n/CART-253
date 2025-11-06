/**
 * Loops Challenge
 * Aliyah R.W.
 * 
 * GET IN LINE!!!

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    let x = 0;
    let y = 0;
    let w = 0;
    let h = 500;
    let s = 0;

    while (x <= 500) {
        stroke(s);
        line(x, y, w, h);
        x+= 50;
        w += 50;
    }

    stroke(0);
    line(x, y, w, h);
    x+= 50;
    w += 50;
}