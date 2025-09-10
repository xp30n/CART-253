/**
 * Function Calls
 * Aliyah
 * 
 * Working on the function calls examples
 */

"use strict";


function setup() {
    // once at the beginning of our program
    createCanvas(640, 480);
    // createCanvas will create a canvas, which is a rectangle that we can draw in - the parenthesis basically tell the function to do it, using the properties within the parentheses. These values are called arguments (height and width in this case). The semi colon means that this function is done. 
}

function draw() {
    // Every frame that our program runs
    background(0, 150, 255); // basically fills the canvas with the color that is mentioned in the parentheses (RBG)
    rect(200, 80, 240, 320); // draws a rectangle - The first number is the x coordinate, the second number is the y coordinate, and the last two numbers are the width and the height
}