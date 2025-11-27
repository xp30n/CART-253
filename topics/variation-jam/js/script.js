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

// Declares the contents of JSON file
let storyData;

/****************************************
 *        TITLE SCREEN VARIABLES
 ****************************************/

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

// Title positioning
let titleText = {
  x: 450,
  y: 220,
};

// Subtitle positioning
let subtitleText = {
  x: 450,
  y: 330,
};

// Loads the custom fonts
let alfanaFont;
let fantasyFont;

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
let secondPage;

let enteredJournal = false;
let showSecondPage = false;

// First page variables
let firstPageImage = {
  x: 90,
  y: 50,
  width: 760,
  height: 600,
};

// Second page variables
let secondPageImage = {
  x: 90,
  y: 50,
  width: 760,
  height: 600,
};


/****************************************
 *                PRELOAD
 ****************************************/

function preload() {

  // Image preloads - Title
  titleBackground = loadImage("assets/images/background-title.jpeg");
  actOne = loadImage("assets/images/act1.png");
  actTwo = loadImage("assets/images/act2.png");
  actThree = loadImage("assets/images/act3.png");

  // Image Preloads - Act One
  actOneBackground = loadImage("assets/images/forest.jpeg");
  questBookImage = loadImage("assets/images/quest-book.png");
  firstPage = loadImage("assets/images/first-page.png");
  secondPage = loadImage("assets/images/second-page.png");

  // Font preloads
  alfanaFont = loadFont("assets/fonts/alfana.otf");
  fantasyFont = loadFont("assets/fonts/fantasy1.ttf");

  // Json File
  storyData = loadJSON("assets/data/story.json");
}

/****************************************
 *             SETUP & DRAW
 ****************************************/
function setup() {
  createCanvas(900, 700);
}

function draw() {
  // sets the default cursor to the arrow
  cursor(ARROW);

  // Loads the data from the JSON file
  intro = storyData.act1.intro;

  // Handles the states of the game
  if (state === "title") {
    drawTitleScreen();
  } else if (state === "actOne") {
    drawActOne();
  } else if (state === "journalScene") {
    drawJournalScene();
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

/****************************************
 *              ACT ONE SCENE
 ****************************************/

function drawActOne() {
  // Gives the background a custom image
  background(actOneBackground);

  // Adds the dialogue window to the canvas
  drawDialogueWindow();

  // If we are on line 2 of the intro speech array, then display the journal
  if (introIndex === 3) {
    showJournalImage = true;
  }
  // After the line 2 of the array appears, scale the journal to full size
  if (showJournalImage && journalScale < 1) {
    journalScale += 0.05;
  }

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

  // Initially shows the first page of the journal, then shows the second page after keyPressed
  if (!showSecondPage) {
    drawFirstPage();
  } else {
    drawSecondPage();
  }
}

function drawFirstPage() {
  image(
    firstPage,
    firstPageImage.x,
    firstPageImage.y,
    firstPageImage.width,
    firstPageImage.height
  );
}

function drawSecondPage() {
  image(
    secondPage,
    secondPageImage.x,
    secondPageImage.y,
    secondPageImage.width,
    secondPageImage.height
  );
}

/****************************************
 *                INPUTS
 ****************************************/

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

function keyPressed() {

  // If there is more text, continue the intro, otherwise switch scenes
  if (state === "actOne" && key === " ") {
    if (introIndex < intro.length - 1) {
      introIndex++;
    }
    else {
      state = "journalScene";
      enteredJournal = true;
    }
  }

  // If a user presses the spacebar, it will switch to the second part of the journal
  if (key === " " && state === "journalScene") {
    if (enteredJournal) {
      enteredJournal = false;
      return;
    }
    showSecondPage = true;
  }
}