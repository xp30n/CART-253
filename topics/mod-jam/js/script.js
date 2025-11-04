/**
 * FrogFrog Example
 * Aliyah Renomeron-Ward
 * 
 * Mod Jam 
 */

"use strict";

// SIR CROAKSWORTH IN THE FLESH
let croaksworth = {
    x: -290,
    y: 280,
    w: 240,
    h: 240 ,
    targetX: 300,
    speed: 0.4 // hehe...
}

let arrivalStatement = ["At Last..."]

let speech = [
    "Huzzah! A willing assistant!",
    "Welcome traveler",
    "to the sacred bog of Eternal Hunger.",
    "My name is Sir Croaksworth,",
    "Devourer of Destinies,",
    "...and flies.",
    "But alas,",
    "I have not eaten in centuries.",
    "Aid me, traveler!",
    "Catch these flies, noble stranger,",
    "and I shall grant you...",
    "probably something important.",
    "Thanks!"
]

// Loads Sir Croaksworth portrait
let croaksworthImage;

function preload() {
    croaksworthImage = loadImage('assets/images/croaksworth.png');
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

    drawDialogueWindow();

}

function drawCroaksworth() {

    // Moves Sir Croaksworth across the screen to the desired X position
    if (croaksworth.x < croaksworth.targetX) {
        croaksworth.x += croaksworth.speed;
    } else [
        croaksworth.x = croaksworth.targetX,
    ]

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