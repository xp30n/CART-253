/**
 * 
 * Aliyah R.W.
 * 
 * You stumble across some pages from a little dragon hatchling's notebook.
 * In his entries, he talks about his adventures during his quest to find his master and older brother
 * Uncover what happened and where this little hatchling went. 
 */

"use strict";

// Starting off on the title screen
let state = "title"

// Loads the title screen background
let titleBackground;

// Loads the act buttons
let actOne;
let actTwo;
let actThree;

// Loads the custom fonts
let alfanaFont;


function preload() {

    // Image preloads
    titleBackground = loadImage("assets/images/background-title.jpeg");
    actOne = loadImage("assets/images/act1.png");
    actTwo = loadImage("assets/images/act2.png");
    actThree = loadImage("assets/images/act3.png");

    // Font preloads 
    alfanaFont = loadFont("assets/fonts/alfana.otf");

}

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(900, 700);
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
    textSize(45);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textAlign(CENTER, CENTER);
    textFont(alfanaFont);
    text("The Lonely Hatchling", 450, 220);

    // Draws the act one button
    drawActOne();
}

function drawActOne() {
    image(actOne, 100, 300, 400, 200);
}
