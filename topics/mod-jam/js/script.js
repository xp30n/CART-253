/**
 * FrogFrog Example
 * Aliyah Renomeron-Ward
 *
 * Mod Jam
 */

"use strict";

let pixelFont;
let starFont;

// SIR CROAKSWORTH IN THE FLESH
let croaksworth = {
  x: -235,
  y: 270,
  w: 230,
  h: 230,
  targetX: 300,
  speed: 0.4, // hehe...
};

// his intro speech
let speech = [
  "Huzzah!\n A willing assistant!",
  "Welcome traveler",
  "to the sacred bog\n of Eternal Hunger.",
  "......",
  "My name is\n Sir Croaksworth,",
  "Devourer of Destinies,",
  "...and flies.",
  "I apologize for\n my leisurely arrival..",
  "My frog legs are\n ancient,", 
  "my croak\n ancient-er",
  "and my wisdom\n ancient-er-er",
  "BUT ALAS,",
  "I have not eaten\n in centuries.",
  "Aid me, traveler!",
  "Catch these flies,\n noble stranger,",
  "and I shall\n grant you...",
  "probably something\n important..",
  "Thanks!",
];

let speechIndex = 0;
let charIndex = 0;
let currentText = "";
let speed = 2;

// 
let typing = false;
let textSound;

// Loads Sir Croaksworth portrait
let croaksworthImage;

function preload() {
  croaksworthImage = loadImage("assets/images/croaksworth.png");
  pixelFont = loadFont("assets/fonts/pixel-font.ttf");
  starFont = loadFont("assets/fonts/star-crush.ttf");
  textSound = loadSound("assets/sounds/text-sound.mp3");
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

  // Draws the window for the text
  drawDialogueWindow();

  let fullText = speech[speechIndex];

  // typing sound effect
  if (charIndex < fullText.length) {
    // the frog speaks!
    if (!textSound.isPlaying()) {
        textSound.loop(); // loop the sound while the frog is talking
    }

    if (frameCount % speed === 0) {
        currentText += fullText[charIndex];
        charIndex++;
    }
  } else {
    // the typing is done, so stop playing the sound
    if (textSound.isPlaying()) {
        textSound.stop();
    }
  }

  // Sir Croaksworth's intro speech
  textSize(23)
  textFont(pixelFont);
  stroke("#00A303")
  strokeWeight(3)
  textAlign(CENTER, CENTER);
  text(currentText, 420, 185);

  // Load the beautiful Sir Croaksworth's portrait
  drawCroaksworth();

  // Title
  textSize(25);
  fill(255);
  stroke(4);
  textFont(starFont);
  text("The Legend of Croaksworth:\n Breath of the Hunger", 420, 70);

  // Text of instructions for the player
  textSize(25);
  fill(255);
  stroke(0);
  textFont(pixelFont);
  strokeWeight(4);
  text("Press any key to begin your quest...", 440, 530);
}

function drawCroaksworth() {
  // Moves Sir Croaksworth across the screen to the middle of the canvas
  if (croaksworth.x < croaksworth.targetX) {
      croaksworth.x += croaksworth.speed;
  } else [
      croaksworth.x = croaksworth.targetX,
  ]

  // Draws Sir Croaksworth
  image(
    croaksworthImage,
    croaksworth.x,
    croaksworth.y,
    croaksworth.w,
    croaksworth.h
  );
}

// Draws the dialogue window for Sir Croaksworth's speech
function drawDialogueWindow() {
  push();
  fill(0);
  stroke("white");
  strokeWeight(5);
  rect(250, 125, 340, 120);
  pop();
}

function keyPressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
      }

  if (charIndex >= speech[speechIndex].length) {
    // move to next line
    if (speechIndex < speech.length - 1) {
      speechIndex++;
      currentText = "";
      charIndex = 0;
    }
  }
}
