/**
 * Self-Esteem
 * Pippin Barr
 * 
 * A portrait of Pippin's self-esteem on a sunny day.
 */

"use strict";

// the sky
let sky = {
    red: 150,
    green: 180,
    blue: 250,
};

// The sun
let sun = { 
    red: 255,
    green: 255,
    blue: 0,
    x: 500,
    y: 70,
    size: 100,
};

// My self-esteem
let selfEsteem = {
    x: 320,
    y: 320,
    shade: 0,
    size: 20,
};

/**
 * Create the canvas
 */
function setup() {
    // Create the canvas
    createCanvas(640, 320);
}

/**
 * Displays the sky, sun, and self-esteem
 */
function draw() {
    // A nice blue sky
    background(sky.red, sky.green, sky.blue);

    // The sun
    push();
    fill(sun.red, sun.green, sun.blue);
    noStroke();
    ellipse(sun.x, sun.y, sun.size);
    pop();

    // My self esteem
    push();
    fill(selfEsteemShade);
    noStroke();
    ellipse(selfEsteemX, selfEsteemY, selfEsteemSize);
    pop();
}