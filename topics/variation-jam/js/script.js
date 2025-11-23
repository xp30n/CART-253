/**
 * The Brave Little Dragon
 * Aliyah R.W.
 * 
 * You stumble across some pages from a little dragon hatchling's notebook.
 * In his entries, he talks about his adventures during his quest to find his older brother
 * Uncover what happened and where this little dragon hatchling went. 
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
    textSize(65);
    fill(255);
    stroke(0);
    strokeWeight(4);
    textAlign(CENTER, CENTER);
    textFont(alfanaFont);
    text("The Brave\n Little Dragon", 450, 220);

    textSize(25)
    text("An Interactive Story", 450, 330);

    // Draws each act button
    drawActs();
}

function drawActs() {
    image(actOne, 380, 370, 130, 60);
    image(actTwo, 380, 440, 130, 60);
    image(actThree, 380, 510, 130, 60);
}
