/**
 * Introducing Variables
 * Aliyah Renomeron-Ward
 * 
 * Learning what variables are and what they do
 */

"use strict";


/**
* Create a canvas
*/
function setup() {
    createCanvas(640, 480)
}


/**
 * Draws a circle in the center of the canvas
*/
function draw() {
    background(0)

    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(width / 2, height / 2, 100, 100); // here, instead of tring to figure out where the center of the canvas is and trying to place the circle there, you can simply tell the code to place the circle at the center by dividing the width and the height by 2. No matter how many times you change the canvas size, you the circle will always remain in the middle using the variables 'width/height / 2'. 
}