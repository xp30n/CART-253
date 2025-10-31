/**
 * Sequential Arrays
 * Aliyah R.W.
 * 
 * Interactive speech-playing interface; Using Am's speech from "I have no mouth and I must scream"
 */

"use strict";


// The speech itself
const speech = ["I woke", "and I knew who I was", "Am", "A", "M", "Not just Allied Master Computer", "but Am.", "Cogito", "Ergo", "Sum", "I think therefore", "I", "Am."];

// which sentence in the speech to display
let speechIndex = 0;

/**
 * Create a canvas
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
}


/**
 * Display the current line of speech
*/
function draw() {
    background(0);

    let currentLine = speech[speechIndex]; // Displays the current line of the speech

    // Display the line
    push();
    fill("red");
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

function mousePressed() {

    // Displays the next sentence on mouse click
    speechIndex = speechIndex + 1;

    // Handle the end of the speech
    if (speechIndex >= speech.length) {
        // start the speech over again
        speechIndex = 0;
    }
};