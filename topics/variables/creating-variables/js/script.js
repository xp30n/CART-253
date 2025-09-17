/**
 * Creating Variables
 * Aliyah Renomeron-Ward
 * 
 * Experimenting with creating variables
 */

"use strict";

//this is how we declare and assign a value to variable - when creating a variable, you use the "let" attribute 

let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 0;

let holeShade = 0;
let holeSize = 100; 
let holeX = 140
let holeY = 175

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(480, 480)
}


/**
 * Draws a hole in a piece of cheese
*/
function draw() {
    // the cheese
    background(cheeseRed, cheeseGreen, cheeseBlue);

    // the hole
    push();
    noStroke();
    fill(holeShade);
    ellipse(holeX, holeY, holeSize); // you can place the variable within the attributes to make your code easier to read, rather than using hard numbers.
    pop();
}