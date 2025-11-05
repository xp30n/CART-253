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
let backgroundMusic
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

  // Draws the background window for the text
  drawDialogueWindow();

  let fullText = speech[speechIndex];

  // typing sound effect
  if (charIndex < fullText.length) {
    // the frog speaks!
    if (!textSound.isPlaying()) {
      textSound.loop(); // loop the sound while the Sir Croaksworth is talking. Or else. 
    }

    if (frameCount % speed === 0) {
      currentText += fullText[charIndex];
      charIndex++;
    }
  } else {
    // the typing is done, so stop playing the sound dammit
    if (textSound.isPlaying()) {
      textSound.stop();
    }
  }

  // Sir Croaksworth's intro speech
  textSize(23);
  textFont(pixelFont);
  stroke("#00A303");
  strokeWeight(3);
  textAlign(CENTER, CENTER);
  text(currentText, 420, 185);

  // Load the beautiful Sir Croaksworth's portrait
  drawCroaksworth();

  // Tells the user to press any key to keep Sir Croaksworth talking
  textSize(20);
  fill(255);
  stroke(0);
  textFont(pixelFont);
  strokeWeight(4);
  text("(Press any key)", 410, 530);
}

function drawCroaksworth() {
  // Moves Sir Croaksworth across the screen to the middle of the canvas
  if (croaksworth.x < croaksworth.targetX) {
    croaksworth.x += croaksworth.speed;
  } else [(croaksworth.x = croaksworth.targetX)];

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
  if (getAudioContext().state !== "running") {
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