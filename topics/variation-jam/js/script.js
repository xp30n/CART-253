/**
 * The Bravest Little Dragon
 * Aliyah R.W.
 *
 * You stumble across a journal from a little dragon hatchling.
 * In his entries, he talks about his adventures during his quest to find his older brother.
 * Uncover what happened and where this little dragon hatchling went.
 */

"use strict";

// Starting off on the title screen
let state = "title";

// Loads the title screen background
let titleBackground;

// Loads the act buttons
let actOne;
let actTwo;
let actThree;

// Act buttons height and width
let actButtons = {
  width: 130,
  height: 60,
};

// Act buttons positioning
let act1Button = {
  x: 380,
  y: 370,
};

let act2Button = {
  x: 380,
  y: 440,
};

let act3Button = {
  x: 380,
  y: 510,
};

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
  cursor(ARROW);

  background(0);

  // Handles the states of the game
  if (state === "title") {
    drawTitleScreen();
  } else if (state === "actOne") {
    drawActOne();
  }
}

/**
 * TITLE SCREEN
 */
function drawTitleScreen() {
  // Loads the background
  background(titleBackground);

  // Title
  textSize(65);
  fill(255);
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER, CENTER);
  textFont(alfanaFont);
  text("The Bravest\n Little Dragon", 450, 220);

  // Subtitle
  textSize(25);
  text("An Interactive Story", 450, 330);

  // Draws each act button
  drawActs();
}

function drawActs() {
  // --- ACT 1 ---
  image(
    actOne,
    act1Button.x,
    act1Button.y,
    actButtons.width,
    actButtons.height
  );
  if (
    mouseX > act1Button.x &&
    mouseX < act1Button.x + actButtons.width &&
    mouseY > act1Button.y &&
    mouseY < act1Button.y + actButtons.height
  ) {
    cursor(HAND);
  }

  // --- ACT 2 ---
  image(
    actTwo,
    act2Button.x,
    act2Button.y,
    actButtons.width,
    actButtons.height
  );

  if (
    mouseX > act2Button.x &&
    mouseX < act2Button.x + actButtons.width &&
    mouseY > act2Button.y &&
    mouseY < act2Button.y + actButtons.height
  ) {
    cursor(HAND);
  }

  // --- ACT 3 ---
  image(
    actThree,
    act3Button.x,
    act3Button.y,
    actButtons.width,
    actButtons.height
  );

  if (
    mouseX > act3Button.x &&
    mouseX < act3Button.x + actButtons.width &&
    mouseY > act3Button.y &&
    mouseY < act3Button.y + actButtons.height
  ) {
    cursor(HAND);
  }
}

function checkOverlap() {
  return (
    mouseX > act1Button.x &&
    mouseX < act1Button.x + actButtons.width &&
    mouseY > act1Button.y &&
    mouseY < act1Button.y + actButtons.height
  );
}

function mousePressed() {
  if (state === "title" && checkOverlap()) {
    state = "actOne";
  }
}

/**
 * ACT ONE SCREEN
 */
function drawActOne() {
  background(0);
}
