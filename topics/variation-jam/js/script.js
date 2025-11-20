/**
 * 
 * Aliyah R.W.
 * 
 * You stumble across some pages from a little dragon hatchling's notebook.
 * In his entries, he talks about his adventures during his quest to find his master
 * Uncover what happened and where this little hatchling went. 
 */

"use strict";

// Starting off on the title screen
let state = "title"

// Loads the title screen background
let titleBackground;

// Loads the custom fonts
let alfanaFont;


function preload() {

    // Image preloads
    titleBackground = loadImage("assets/images/title-screen2.jpeg");

    // Font preloads 
    alfanaFont = loadFont("assets/fonts/alfana.otf");

}

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(1000, 600);
}

/**
 * Draws the canvas
*/
function draw() {
    background(0);

    // Handles the states of the game
    if (state === "title") (
        drawTitleScreen()
    )

}

function drawTitleScreen() {
    // Loads the background
   background(titleBackground);

    // Title text
    textSize(35);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textAlign(CENTER, CENTER);
    textFont(alfanaFont);
    text("The Lonely Hatchling", 500, 200);
}   