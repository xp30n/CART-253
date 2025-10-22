/**
 * Buzzy the parameter
 * Aliyah R.W.
 * 
 * A fly that buzzes around on the canvas
 */

"use strict";

// Our fly that will buzz around
let buzzyTheFly = {
    x: 200,
    y: 200,
    size: 30,
    buzziness: 4
};

let jazzytheFly = {
    x: 300,
    y: 250,
    size: 10,
    buzziness: 10
};

/**
 * Create a canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Background, move and draw buzzy
 */
function draw() {
    background("#87ceeb");

    // Move buzzy
    moveFly(buzzyTheFly);
    moveFly(jazzytheFly)

    // Draw buzzy
    drawFly(buzzyTheFly);
    drawFly(jazzytheFly);
}

function moveFly(fly) {
    fly.x += random(-fly.buzziness, fly.buzziness);
    fly.y += random(-fly.buzziness, fly.buzziness);
}

function drawFly(fly) {
    push();
    noStroke();
    fill(0);
    ellipse(fly.x,fly.y, fly.size);
    pop();
}