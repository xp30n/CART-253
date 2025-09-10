/**
 * Drawings
 * Aliyah
 * 
 * Practicing and learning drawing functions in p5
 */

"use strict";

const { push } = require("expo-router/build/global-state/routing");

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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