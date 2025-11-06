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

    // vertical lines
    while (x <= height) {
        stroke(0);
        line(x, 0, x, h);
        x += 50;
        s += 50; 
        w += 50;
    }

    // horizontal lines
    s = 0;
    y = 0;

    while (y <= height) {
        stroke(0);
        line(0, y, w, y);
        y += 50;
        s += 50;
    }
}