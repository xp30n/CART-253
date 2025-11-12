/**
 * Tarot
 * Aliyah R.W
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";

// our tarot data
let tarot = undefined;

// Our fortune
let fortune = "Click to show a fortune";

function preload() {
    tarot = loadJSON("assets/data/tarot_interpretations.json");
}

/**
 * creates a canvas
*/
function setup() {
    createCanvas(800, 400);
}

/**
 * display the tarot
*/
function draw() {
    background(0);

    // Display the information
    push();
    textSize(16);
    fill("blue");
    textAlign(CENTER, CENTER);
    text(fortune, width / 2, height / 2);
    pop();
}

function mousePressed() {
    // Choose a random card
    const card = random(tarot.tarot_interpretations);

    // Choose a random fortune
    fortune = random(card.fortune_telling);
}
