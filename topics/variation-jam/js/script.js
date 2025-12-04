/**
 * The Bravest Little Dragon
 * Aliyah R.W.
 *
 * You stumble across a journal from a little dragon hatchling named Talo.
 * In his entries, he talks about his missing older brother, Solin.
 * Play the minigames and uncover what happened to the yound dragon. 
 */

"use strict";

// Starting off on the title screen
let state = "title";

// Declares the contents of JSON file
let storyData;

/****************************************
 *        TITLE SCREEN VARIABLES
 ****************************************/

// Loads the backgrounds for each act/scene
let titleBackground;
let actOneBackground;

// Loads the start button
let startButtonImage;

let startButton = {
  x: 335,
  y: 410,
  width: 230,
  height: 100
}

// Title positioning
let titleText = {
  x: 450,
  y: 220,
};

// Subtitle positioning
let subtitleText = {
  x: 450,
  y: 340,
};

// Loads the custom fonts
let alfanaFont;
let pixelFont;

/****************************************
 *           ACT ONE VARIABLES
 ****************************************/

// The introduction dialogue for this interactive story
let intro = [];

// Starting on the first line of the array and displaying the string of arrays
let introIndex = 0;
let currentText;

// Journal Image scaling variables
let showJournalImage;
let journalScale = 0;

// Properties for the dialogue window
let dialogueWindow = {
  x: 200,
  y: 440,
  width: 500,
  height: 170,
  fill: "#0A3001",
};

// Declares the questbook
let questBookImage;

// Properties for the questbook image
let questBook = {
  x: 0,
  y: 0,
  width: 200,
  height: 200,
};

/****************************************
 *        JOURNAL SCENE VARIABLES
 ****************************************/

let firstPage;

let enteredJournal = false;

// First page variables
let firstPageImage = {
  x: 90,
  y: 50,
  width: 760,
  height: 600,
};

/****************************************
 *           PHASE 2 VARIABLES
 ****************************************/

// Declares the intro 2 array from JSON file
let intro2Index = 0;
let intro2 = [];

/****************************************
 *           GAME MENU VARIABLES
 ****************************************/

// Loads background
let gameMenuBackground;

// Loads game buttons
let gameOneButtonImage;
let gameTwoButtonImage;
let gameThreeButtonImage;


let gameOne = {
  x: 340,
  y: 320,
  width: 230,
  height: 110
}

let gameTwo = {
  x: 340,
  y: 440,
  width: 230,
  height: 110
}

let gameThree = {
  x: 340,
  y: 570,
  width: 230,
  height: 110
}

/****************************************
 *            FIRST GAME VARS
 ****************************************/

let gameBackgrounds;

// Loads the fairy images and places them on the canvas
let fairyImage;

let fairy1 = {
  x: 300,
  y: 20,
  width: 40,
  height: 40,
  velocityY: 3
}

let fairy2 = {
  x: 200,
  y: 20,
  width: 40,
  height: 40,
  velocityY: 4
}

// Loads the jar pngs
let jarImage;
let jarImageTwo;

let jar = {
  x: undefined,
  y: undefined,
  width: 80,
  height: 100
}

// Loads the home button
let homeButtonImage;

// Properties of the home button
let homeButton = {
  x: 810,
  y: 620,
  width: 80,
  height: 70,
}

/****************************************
 *                PRELOAD
 ****************************************/

function preload() {

  // Image preloads - Title
  titleBackground = loadImage("assets/images/background-title.jpeg");
  startButtonImage = loadImage("assets/images/startButton.png");

  // Image Preloads - Act One
  actOneBackground = loadImage("assets/images/forest.jpeg");
  questBookImage = loadImage("assets/images/quest-book.png");
  firstPage = loadImage("assets/images/journal.png");

  // Image Preloads - Game 1 (Phase 2)
  gameMenuBackground = loadImage("assets/images/fairyGarden.png");
  gameOneButtonImage = loadImage("assets/images/game1.png");
  gameTwoButtonImage = loadImage("assets/images/game2.png");
  gameThreeButtonImage = loadImage("assets/images/game3.png");

  // Game One Preloads
  gameBackgrounds = loadImage("assets/images/fairyGardenBlur.png");
  fairyImage = loadImage("assets/images/fairy.png");
  jarImage = loadImage("assets/images/openJar.png");
  jarImageTwo = loadImage("assets/images/closedJar.png");
  homeButtonImage = loadImage("assets/images/homeButton.png");

  // Font preloads
  alfanaFont = loadFont("assets/fonts/alfana.otf");
  pixelFont = loadFont("assets/fonts/pixel-font.ttf");

  // Json File
  storyData = loadJSON("assets/data/story.json");
}

/****************************************
 *             SETUP & DRAW
 ****************************************/

function setup() {
  createCanvas(900, 700);

  // Loads the data from the JSON file
  intro = storyData.act1.intro;
  intro2 = storyData.act1.phaseTwo.intro2;
}

function draw() {
  // sets the default cursor to the arrow
  cursor(ARROW);

  // Handles the states of the game
  if (state === "title") {
    drawTitleScreen();
  } else if (state === "actOne") {
    drawActOne();
  } else if (state === "journalScene") {
    drawJournalScene();
  } else if (state === "phase2"){
    drawPhase2();
  } else if (state === "gameMenu") {
    drawMenuScreen();
  } else if (state === "firstGame") {
    drawFirstGame();
  }
}

/****************************************
 *             TITLE SCREEN
 ****************************************/

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
  text("The Bravest\n Little Dragon", titleText.x, titleText.y);

  // Subtitle
  textSize(25);
  text("An Interactive Story", subtitleText.x, subtitleText.y);

  // Draws the start button
  drawStart();
}

function drawButton(img, btn) {
  // Draws the button images
  image(img, btn.x, btn.y, btn.width, btn.height);

  // Changes the cursor om hover
  if (
    mouseX > btn.x &&
    mouseX < btn.x + btn.width &&
    mouseY > btn.y &&
    mouseY < btn.y + btn.height
  ) {
    cursor(HAND);
  }
}

// Draws the act buttons
function drawStart() {
  drawButton(startButtonImage, startButton);
}

/****************************************
 *              ACT ONE SCENE
 ****************************************/

function drawActOne() {
  // Gives the background a custom image
  background(actOneBackground);

  // Adds the dialogue window to the canvas
  drawDialogueWindow();

  // Displays the introduction array
  let currentText = intro[introIndex];

  // If we are on line 2 of the intro speech array, then display the journal
  if (introIndex === 3) {
    showJournalImage = true;
  }
  // After the line 2 of the array appears, scale the journal to full size
  if (showJournalImage && journalScale < 1) {
    journalScale += 0.05;
  }

  // Displays the intro dialogue within the dialogue window
  textSize(35);
  textFont(pixelFont);
  fill(255);
  stroke(0);
  strokeWeight(4)
  textAlign(CENTER, CENTER);
  text(currentText, 450, 520);

  // Displays the instructions for how to proceed through the array
  textSize(25);
  text("Press Spacebar to continue", 450, 650);

  // Displays Talo's questbook
  drawJournal();
}

// Creates the dialogue window
function drawDialogueWindow() {
  push();
  stroke(255);
  strokeWeight(4);
  fill(dialogueWindow.fill);
  rect(
    dialogueWindow.x,
    dialogueWindow.y,
    dialogueWindow.width,
    dialogueWindow.height
  );
  pop();
}

function drawJournal() {
  if (showJournalImage) {
    push();
    translate(450, 300);
    scale(journalScale);
    imageMode(CENTER);
    image(
      questBookImage,
      questBook.x,
      questBook.y,
      questBook.width,
      questBook.height
    );
    pop();
  }
}


/****************************************
 *            JOURNAL SCENE
 ****************************************/

function drawJournalScene() {
  background(actOneBackground);

  drawFirstPage();
}

// Draws the first two pages of Talo's journal
function drawFirstPage() {
  image(
    firstPage,
    firstPageImage.x,
    firstPageImage.y,
    firstPageImage.width,
    firstPageImage.height
  );

  // Displays the text indicating how to continue to next scene
  textSize(25);
  textFont(pixelFont);
  fill(255);
  stroke(0);
  strokeWeight(4)
  textAlign(CENTER, CENTER);
  text("Press Spacebar to continue", 450, 670);
}

/****************************************
 *          PHASE 2 SCENE
 ****************************************/

function drawPhase2() {
  background(actOneBackground);

  drawDialogueWindow();

  let currentText = intro2[intro2Index];

  textSize(35);
  textFont(pixelFont);
  fill(255);
  stroke(0);
  strokeWeight(4)
  textAlign(CENTER, CENTER);
  text(currentText, 450, 520);

  // Displays the instructions for how to proceed through the array
  textSize(25);
  text("Press Spacebar to continue", 450, 650);
}

/****************************************
 *              GAME MENU
 ****************************************/

function drawMenuScreen() {
  background(gameMenuBackground);

  textSize(45);
  textFont(pixelFont);
  fill(255);
  stroke(0);
  strokeWeight(4)
  textAlign(CENTER, CENTER);
  text("Choose Your Adventure!", 460, 280);

  drawGames();
}

// Draws the game buttons
function drawGames() {
  drawButton(gameOneButtonImage, gameOne);
  drawButton(gameTwoButtonImage, gameTwo);
  drawButton(gameThreeButtonImage, gameThree);
}


/****************************************
 *             FIRST GAME
 ****************************************/

function drawFirstGame() {
  // Loads the background
  background(gameBackgrounds);

  // Draws the fairies on the screen
  drawFairy(fairy1);
  drawFairy(fairy2);

  // Draws the home button - Will lead back to the menu
  drawHomeButton();

  // Creates the jar and moves it
  moveJar();
  drawJar();
}

// Creates the fairies
function drawFairy(f) {
  push();
  imageMode(CENTER);
  image(fairyImage, f.x, f.y, f.width, f.height);
  pop();
}

function drawHomeButton() {
  image(homeButtonImage, homeButton.x, homeButton.y, homeButton.width, homeButton.height);
}

function drawJar() {
  push();
  imageMode(CENTER);
  image(jarImage, jar.x, jar.y, jar.width, jar.height);
  pop();
}

function moveJar() {
  jar.x = mouseX;
  jar.y = height - jar.height / 2;
}

/****************************************
 *                INPUTS
 ****************************************/

// Check if the mouse is over the mouse buttons
function isHovering(btn) {
  return (
    mouseX > btn.x &&
    mouseX < btn.x + btn.width &&
    mouseY > btn.y &&
    mouseY < btn.y + btn.height
  );
}

function mousePressed() {
  if (state === "title" && isHovering(startButton)) {
    state = "actOne";
  }
  
  // Checks if a user is hovering over either of the game buttons and if they click it.
  if (state === "gameMenu") {
    if (isHovering(gameOne)) {
      state = "firstGame";
    }
  }
}

function keyPressed() {

  // If there is more text, continue the intro, otherwise switch scenes
  if (state === "actOne" && key === " ") {
    if (introIndex < intro.length - 1) {
      introIndex++;
      enteredJournal = true;
    }
    else {
      state = "journalScene";
    }
  }

  if (state === "journalScene" && key === " "){
    if (enteredJournal) {
      enteredJournal = false;
      return;
    }
    state = "phase2";
  }

  if (state === "phase2" && key === " ") {
    if (intro2Index < intro2.length - 1) {
      intro2Index++;
    } 
    else {
      state = "gameMenu";
    }
  }

  if (state === "actOne" && key === "S" || key === "s"){
    state = "firstGame";
  }
}