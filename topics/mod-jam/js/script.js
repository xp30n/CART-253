/**
 * FrogFrog Example
 * Aliyah Renomeron-Ward
 *
 * Mod Jam
 */

"use strict";

// This is the title screen
let state = "title";

// Fonts
let pixelFont;
let starFont;

// Images
let backgroundImage;
let croaksworthImage;
let swordImage;

// Music
let backgroundMusic;
let musicstarted = false; // music starts off

// Instructions screen begins hidden
let instructionsstarted = false;

// SIR CROAKSWORTH IN THE FLESH
let croaksworth = {
  x: 165,
  y: 190,
  w: 250,
  h: 250,
  targetX: 300,
  speed: 0.4, // hehe...he's a lil slow
};

// Sir Croaksworth's Introduction speech
let speech = [
  "Huzzah!\n A willing assistant!",
  "Welcome traveler",
  "to the sacred bog\n of Eternal Hunger.",
  "My name is\n Sir Croaksworth,",
  "Devourer of Destinies,",
  "...and flies.",
  "I apologize for\n my slow arrival..",
  "My frog legs are\n ancient,",
  "my croak\n ancient-er",
  "and my wisdom\n ancient-er-er",
  "BUT ALAS,",
  "I have not eaten\n in centuries.",
  "My mana depletes\n and my strength wanes.",
  "Aid me, traveler!",
  "Catch some flies\n by pressing S.",
  "and I shall\n grant you...",
  "probably something\n important..",
  "HUZZAAH! ONWARD\n NOW TRAVELER",
  "Press Z to begin!",
];

// Text write-on variables
let speechIndex = 0;
let charIndex = 0;
let currentText = "";
let speed = 2;

// Typing sound effect
let typing = false;
let textSound;

function preload() {
  // Image Preloads
  backgroundImage = loadImage("assets.images/background-image.jpeg");
  croaksworthImage = loadImage("assets/images/croaksworth.png");
  swordImage = loadImage("assets/images/sword.png");

  // Font Preloads
  pixelFont = loadFont("assets/fonts/pixel-font.ttf");
  starFont = loadFont("assets/fonts/star-crush.ttf");

  // Sound Preloads
  textSound = loadSound("assets/sounds/text-sound.mp3");
  backgroundMusic = loadSounds("assets/sounds/background-music.mp3");
}

/**
 * sets up the canvas
 */
function setup() {
  createCanvas(840, 560);
}

/**
 * Draws the canvas
 */
function draw() {
  background("#278EF5");

  if (state === "title") {
    drawTitlescreen();
  } else if (state === "instructions") {
    drawInstructionsScreen();
  }
}

/**
 * TITLE SCREEN
 */

function drawTitleScreen() {
  background(backgroundImage);

  // Sir Croaksworth's portait on the title screen
  croaksworth.x = 165;
  croaksworth.y = 190;
  croaksworth.w = 250;
  croaksworth.h = 250;

  // Draws Sir Croaksworth on the canvas
  drawSirCroaksworth();

  // Title text
  textSize(45);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(RIGHT, RIGHT);
  textFont(starFont);
  text("The Legend of Sir Croaksworth:\n Breath of the Hunger", 820, 70);

  // Instructions to change to next state
  textSize(30);
  text("Click to begin your quest", 820, 540);
}

/**
 * Instructions Screen
 */

function drawInstructionsScreen() {
    // Adjusts tarts Sir Croaksworth position to be off the screen at first
  if (!instructionsStarted) {
    croaksworth.x = -235; 
    croaksworth.y = 270;
    croaksworth.w = 230;
    croaksworth.h = 230;
    instructionsStarted = true;
  }

  // Croaksworth moves in to the middle of the canvas
  if (croaksworth.x < croaksworth.targetX) {
    croaksworth.x += croaksworth.speed;
  } else {
    croaksworth.x = croaksworth.targetX;
  }

  // Draw dialogue window
  drawDialogueWindow();
  drawSirCroaksworth();

  // Typing text
  let fullText = speech[speechIndex];

  if (charIndex < fullText.length) {
    if (!textSound.isPlaying()) textSound.loop();
    if (frameCount % speed === 0) {
      currentText += fullText[charIndex];
      charIndex++;
    }
  } else {
    if (textSound.isPlaying()) textSound.stop();
  }

  // Displays Sir Croaksworth's speech
  textSize(23);
  textFont(pixelFont);
  stroke("#00A303");
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  text(currentText, 420, 185);

  // Instructions on how to proceed through his long speech
  textSize(20);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("(Press any key)", 410, 530);
}
