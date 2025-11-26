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

// Loads the backgrounds for each act/scene
let titleBackground;
let actOneBackground;

// Loads the act buttons
let actOne;
let actTwo;
let actThree;

// Act buttons universal height and width
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
let fantasyFont;


function preload() {
  // Image preloads - Title
  titleBackground = loadImage("assets/images/background-title.jpeg");
  actOne = loadImage("assets/images/act1.png");
  actTwo = loadImage("assets/images/act2.png");
  actThree = loadImage("assets/images/act3.png");

  // Image Preloads - Act One
  actOneBackground = loadImage("assets/images/forest.jpeg");
  questBook = loadImage("assets/images/quest-book.png");

  // Font preloads
  alfanaFont = loadFont("assets/fonts/alfana.otf");
  fantasyFont = loadFont("assets/fonts/fantasy1.ttf");
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
  // sets the default cursor to the arrow
  cursor(ARROW);

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
  // Loads the background image
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

// Draws the act buttons
function drawActs() {
  // --- ACT 1 ---
  image(
    actOne,
    act1Button.x,
    act1Button.y,
    actButtons.width,
    actButtons.height
  );
  // Changing the mouse to become a hand when a user is hovering over the buttons
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

// Check if the mouse is over the mouse buttons
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
 * /// ACT ONE SCREEN ///
 */
// The introduction dialogue for this interactive story
let intro = [
  "The forest is peaceful\n as you stride through,",
  "On a journey of your own,\n lost in a sea of thoughts.",
  "All of a sudden,\n you come across a\n discarded journal.",
  "Picking it up,",
  "You notice it's covered\n in dirt and it seems to be\n quite old.",
  "The front cover reads:\n Talo's Quests!",
];

let introIndex = 0;
let currentText;

// Properties for the dialogue window
let dialogueWindow = {
    x: 200, 
    y: 440, 
    width: 500, 
    height: 170,
    fill: "#0A3001",
}

// Properties for the questbook image
let questBook = {
    x: 350, 
    y: 200, 
    width: 200, 
    height: 200,
}

// Draws the screen for act one
function drawActOne() {

  // Gives the background a custom image
  background(actOneBackground);

  // Adds the dialogue window to the canvas
  drawDialogueWindow();

  // Displays the introduction array
  let currentText = intro[introIndex];

  // Displays the intro dialogue within the dialogue window
  textSize(45);
  textFont(fantasyFont);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text(currentText, 450, 520);

  // Displays the instructions for how to proceed through the array
  textSize(20);
  text("Press Spacebar to continue", 450, 420);

  // Displays Talo's questbook
  drawJournal();
}

// Creates the dialogue window
function drawDialogueWindow() {
  push();
  stroke(255);
  strokeWeight(4);
  fill(dialogueWindow.fill);
  rect(dialogueWindow.x, dialogueWindow.y, dialogueWindow.width, dialogueWindow.height);
  pop();
}

// Draws the journal
function drawJournal() {
    image(questBook, questBook.x, questBook.y, questBook.width, questBook.height);
}

// Allows the user to go through the introduction text using the spacebar
function keyPressed() {
  if (key === " ") {
    introIndex = introIndex + 1;
  }
}
