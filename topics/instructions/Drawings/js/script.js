/**
 * Drawings
 * Aliyah
 * 
 * Practicing and learning drawing functions in p5
 */

"use strict";

const { push } = require("expo-router/build/global-state/routing");

/**
 * This creates a square canvas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * this creates the drawings on the canvas
*/
function draw() {
    background(150, 150, 150);
    
    push(); // the push and the pop keeps things within them constant while everything around them changes!! 
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480);
    pop();

    push();
    fill("white");
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();
}