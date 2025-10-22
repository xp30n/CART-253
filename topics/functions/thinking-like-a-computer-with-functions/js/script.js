/**
 * Thinking like a computer with functions
 * Aliyah R.W.
 * 
 * An example of a function with parameters and a return value.
 */

"use strict";


let rectX = 20;
let rectY = 40;
let rectSize = 50;

let rectTwo_x = 200;
let rectTwo_y = 100;
let rectTwo_size = 25;

let sun = {
    x: 400,
    y: 50,
    size: 100,
    color: "blue"
}

let sun2 = {
    x: 20,
    y: 50, size: 100,
    color: "blue"
}

/**
 * Create a canvas
*/
function setup() {
    createCanvas(500, 500);
}

function moveRect(tempX) {
    tempX += 1;

    return tempX;
}

function displaySun(tempX, tempY, tempSize) {
    push();
    fill(tempColor);
    ellipse(tempX, tempY, tempSize);
    pop();
}


/**
 * Draw the shapes, calculate a result
*/
function draw() {
    background("pink");

    // fancyRect();
    // fancyRectTwo();
    
    displaySun(sun.x, sun.y, sun.size, sun.color)

    rectX = moveRect(rectX);
    // rectTwo_x = moveRect(rectTwo_X);

    fancyRectRev(rectX, rectY, rectSize);
    fancyRectRev(rectTwo_x, 150, 25);
}



function fancyRectRev(tempX, tempY, tempSize) {
    push();
    fill("#ce87eb");
    rect(tempX, tempY, tempSize);
    pop();
}

function fancyRect() {
    push();
    fill("#ce87eb");
    rect(rectX, rectY, rectSize);
    pop();
}

function fancyRectTwo() {
    push();
    fill("#ce87eb");
    rect(rectTwo_x, rectTwo_y, rectTwo_size);
    pop();
}