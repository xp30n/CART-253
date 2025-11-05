/**
 * FrogFrog Example
 * Aliyah Renomeron-Ward
 *
 * Mod Jam
 */

"use strict";

// We start off on the title screen:3
let state = "title";

// Fonts
let pixelFont;
let starFont;

// Images
let backgroundImage;
let croaksworthImage;

// Gameplay screen images
let wizardFrogImage;
let dayImage;

// Music
let backgroundMusic;
let gameplayMusic;
let musicStarted = false; // music starts off

// Instructions screen begins hidden
let instructionsStarted = false;

// SIR CROAKSWORTH IN THE FLESH
let croaksworth = {
  x: 165,
  y: 190,
  w: 250,
  h: 250,
  targetX: 300,
  speed: 0.4, // hehe...he's a lil slow
};

let fly = {
  x: 0,
  y: 200, // Will be random
  size: 10,
  speed: 3,
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
  "Help me catch\n some flies",
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
  backgroundImage = loadImage("assets/images/title-screen.jpeg");
  croaksworthImage = loadImage("assets/images/croaksworth.png");
  dayImage = loadImage("assets/images/evening.png");
  wizardFrogImage = loadImage("assets/images/floating-croakie.png");

  // Font Preloads
  pixelFont = loadFont("assets/fonts/pixel-font.ttf");
  starFont = loadFont("assets/fonts/star-crush.ttf");

  // Sound Preloads
  textSound = loadSound("assets/sounds/text-sound.mp3");
  backgroundMusic = loadSound("assets/sounds/background-music.mp3");
  gameplayMusic = loadSound("assets/sounds/gameplay-music.mp3");
}

/**
 * SETS UP THE CANVAS
 */
function setup() {
  createCanvas(840, 560);

  resetFly();
}

/**
 * DRAWS THE CANVAS
 */
function draw() {
  if (state !== "instructions" && textSound.isPlaying()) {
    textSound.stop();
  }  

  background("#278EF5");

  if (state === "title") {
    drawTitleScreen();
  } else if (state === "instructions") {
    drawInstructionsScreen();
  } else if (state === "gameplay") {
    drawGameplayScreen();
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
 * INSTRUCTIONS SCREEN
 */

function drawInstructionsScreen() {
  // Adjusts Sir Croaksworth position to be off the screen at first
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

  // typing text sound effect
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
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  text(currentText, 420, 185);

  // Instructions on how to proceed through his long speech
  textSize(20);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text("(Press any key or D to skip)", 410, 530);
}

/**
 * GAMEPLAY SCREEN
 */

function drawGameplayScreen() {
  background(dayImage);

  noCursor();

  // stop the background music of the intro
  if (backgroundMusic.isPlaying()) {
    backgroundMusic.stop();
  }
  // stop the text sounds
  if (textSound.isPlaying()) {
    textSound.stop();
  }

  // starts the gameplay music
  if (!gameplayMusic.isPlaying()) {
    gameplayMusic.loop();
    gameplayMusic.setVolume(0.3);
  }

  textSize(18);
  fill(255);
  stroke(0);
  strokeWeight(5);
  textAlign(RIGHT, RIGHT);
  textFont(pixelFont);
  text("Catch the flies by moving your mouse to control Sir Croaksworth", 820, 520);

  textFont(pixelFont);
  text("Dodge the fireballs!", 820, 550);

  drawWizardFrog();

  // draws the moving functions
  moveFly();

  // draw functions
  drawFly();

  checkOverlap();
}
/**
 * FUNCTIONS
 */
function drawSirCroaksworth() {
  image(
    croaksworthImage,
    croaksworth.x,
    croaksworth.y,
    croaksworth.w,
    croaksworth.h
  );
}

// RPG style dialogue window
function drawDialogueWindow() {
  push();
  fill(0);
  stroke("white");
  strokeWeight(5);
  rect(250, 125, 340, 120);
  pop();
}

function drawWizardFrog() {
  imageMode(CENTER);
  image(wizardFrogImage, mouseX, mouseY, 120, 140);
  imageMode(CORNER); // stops the background from moving:(
}

function drawFly() {
  // Draws the fly as a black circle
  push();
  noStroke();
  fill("#000000");
  ellipse(fly.x, fly.y, fly.size);
  pop();
}

function moveFly() {
  fly.x += fly.speed;
  if (fly.x > width) {
    resetFly();
  }
}

function checkOverlap() {
  const d = dist(mouseX, mouseY, fly.x, fly.y);
  const caught = d < 90;
  if (caught) {
    resetFly();
  }
}

// Start music only only when the user clicks
function mousePressed() {
  if (!musicStarted && !backgroundMusic.isPlaying()) {
    backgroundMusic.loop();
    backgroundMusic.setVolume(0.2);
    musicStarted = true;
  }

  // Transition to instructions screen if on title and mouse is pressed
  if (state === "title") {
    state = "instructions";
  }

  // conditions for gameplay screen
  if (state === "gameplay") {
    // Start the music
    if (!musicStarted && !gameplayMusic.isPlaying()) {
      gameplayMusic.loop();
      gameplayMusic.setVolume(0.2);
      musicStarted = true;
    }
  }
}

// when a key is pressed, the next array of speech will appear
function keyPressed() {
  if (getAudioContext().state !== "running") getAudioContext().resume();

  if (state === "instructions") {
    // Check if the text is done being typed
    if (charIndex >= speech[speechIndex].length) {
      // If it's not the last line of the array, go to the next
      if (speechIndex < speech.length - 1) {
        speechIndex++;
        currentText = "";
        charIndex = 0;
      }
    }

    // if it's the last line of the array, then proceed to the next state when user presses Z
    if (speechIndex === speech.length - 1 && (key === "z" || key === "Z")) {
      state = "gameplay";
    }
    // lets me skip to the gameplay screen for easier access
    if (key === "d" || key === "D") {
      state = "gameplay";
      speechIndex = speech.length - 1;
      currentText = speech[speechIndex];
    }
  }
}

function resetFly() {
  fly.x = 0;
  fly.y = random(0, 300);
}