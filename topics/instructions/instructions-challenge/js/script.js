/**
 * Instructions Challenge
 * Aliyah 
 * September 10th, 2025
 * 
 * This is my submission for the Instructions Challenge! It's actually super cool and looks like the night sky, with a house
 * 
 */

"use strict";


/**
 * 
*/
function setup() {
    createCanvas(900, 600);
}


// The drawing in its entirety
function draw() {

    // The sky
    background(20, 52, 164);

    // The moon
    push();
    noStroke();
    ellipse(80, 70, 100);
    fill(20, 52, 164)
    noStroke();
    ellipse(95, 70, 80);    
    pop();

    // The ground
    push();
    noStroke();
    fill(25, 25, 112);
    rect(200, 500, 900, 600, 50, 15, 10, 5);
    pop();
}