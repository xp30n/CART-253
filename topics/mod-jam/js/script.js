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
let swordImage;

// Music
let backgroundMusic;
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

let froggie = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

let fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
}

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
  swordImage = loadImage("assets/images/sword.png");

  // Font Preloads
  pixelFont = loadFont("assets/fonts/pixel-font.ttf");
  starFont = loadFont("assets/fonts/star-crush.ttf");

  // Sound Preloads
  textSound = loadSound("assets/sounds/text-sound.mp3");
  backgroundMusic = loadSound("assets/sounds/background-music.mp3");
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

/**
 * GAMEPLAY SCREEN
 */

function drawGameplayScreen() {
    background("#003287");

    // draws the moving functions
    moveFly();
    moveFroggie();
    moveTongue();

    // draw functions
    drawFly();
    drawFroggie();

    // Check overlap
    checkTongueFlyOverlap();
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

function drawFroggie() {
    push();
    fill("#ff0000");
    noStroke();
    ellipse(froggie.tongue.x, froggie.tongue.y, froggie.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(froggie.tongue.size);
    line(froggie.tongue.x, froggie.tongue.y, froggie.body.x, froggie.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(froggie.body.x, froggie.body.y, froggie.body.size);
    pop();
}

function drawFly() {
    // Draws the fly as a black circle
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();

}

// Start music only only when the user clicks
function mousePressed() {
  if (!musicStarted) {
    backgroundMusic.loop();
    backgroundMusic.setVolume(0.2);
    musicStarted = true;
  }

  // Transition to instructions screen if on title and mouse is pressed
  if (state === "title") {
    state = "instructions";
  }

  // if we are on the gameplay screen and the mouse is pressed, activate the tongue functions
  if (state ==="gameplay") {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
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

    // if it's the last line of the array, then proceed to the next state
      else if (key === "z" || key === "Z") {
        state = "gameplay";
      }

      // lets me skip to the gameplay screen for easier access
      if (key === "d" || key === "D") {
        state = "gameplay";
        speechIndex = speech.length -1;
        currentText = speech[speechIndex];
      }
  }
}

function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

function moveFroggie() {
    froggie.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    froggie.tongue.x = froggie.body.x;
    // If the tongue is idle, it doesn't do anything
    if (froggie.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (froggie.tongue.state === "outbound") {
        froggie.tongue.y += -froggie.tongue.speed;
        // The tongue bounces back if it hits the top
        if (froggie.tongue.y <= 0) {
            froggie.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (froggie.tongue.state === "inbound") {
        froggie.tongue.y += froggie.tongue.speed;
        // The tongue stops if it hits the bottom
        if (froggie.tongue.y >= height) {
            froggie.tongue.state = "idle";
        }
    }
}

function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(froggie.tongue.x, froggie.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < froggie.tongue.size/2 + fly.size/2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        froggie.tongue.state = "inbound";
    }
}
