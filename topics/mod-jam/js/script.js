/**
 * FrogFrog Example
 * Aliyah Renomeron-Ward
 * 
 * Mod Jam 
 */

"use strict";

let pixelFont;

// SIR CROAKSWORTH IN THE FLESH
let croaksworth = {
    x: 290,
    y: 280,
    w: 240,
    h: 240 ,
    targetX: 300,
    speed: 0.4 // hehe...
}


let speech = [
    "Alas...I have arrived",
    "Huzzah!\n A willing assistant!",
    "Welcome traveler",
    "to the sacred bog\n of Eternal Hunger.",
    "My name is\n Sir Croaksworth,",
    "Devourer of Destinies,",
    "...and flies.",
    "But alas,",
    "I have not eaten\n in centuries.",
    "Aid me, traveler!",
    "Catch these flies,\n noble stranger,",
    "and I shall grant you...",
    "probably something\n important.",
    "Thanks!"
]

let speechIndex = 0;

// Loads Sir Croaksworth portrait
let croaksworthImage;

function preload() {
    croaksworthImage = loadImage('assets/images/croaksworth.png');
    pixelFont = loadFont('assets/fonts/pixel-game.otf');
}

/**
 * sets up the canvas
*/
function setup() {
    createCanvas(840, 560)
}

/**
 * Draws the canvas
*/
function draw() {
    background("#278EF5");

    // Load the beautiful Sir Croaksworth's portrait
    drawCroaksworth();

    // Text of instructions for the player
    textSize(30);
    fill(255);
    stroke(0);
    textFont(pixelFont);
    strokeWeight(4);
    text("Press any key to continue!", 265, 50);

    // Draws the window for the text
    drawDialogueWindow();

    // Displays Sir Croaksworth opening speech 
    let currentLine = speech[speechIndex]; 
    push();
    fill(255);
    textSize(35);
    textFont(pixelFont);
    textAlign(CENTER, CENTER);
    text(currentLine, 420, 140);
    pop();
}

function drawCroaksworth() {

    // Moves Sir Croaksworth across the screen to the middle of the canvas
    // if (croaksworth.x < croaksworth.targetX) {
    //     croaksworth.x += croaksworth.speed;
    // } else [
    //     croaksworth.x = croaksworth.targetX,
    // ]

    // Draws Sir Croaksworth
    image(croaksworthImage, croaksworth.x, croaksworth.y, croaksworth.w, croaksworth.h);
}

// Draws the dialogue window for Sir Croaksworth's speech
function drawDialogueWindow() {
    push();
    fill(0);
    stroke("white");
    strokeWeight(5)
    rect(240, 70, 355, 140);
    pop();
}

function keyPressed() {
    // Displays the next sentence on key press
    speechIndex = speechIndex + 1;
}