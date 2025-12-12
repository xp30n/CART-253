"use strict";

// Default state of the game is the menu screen
let state = "menu";

// LOADING SCREEN VARIABLES
let nextState = "";
let loadStartTime = 0;

// Loads the font
let hackerFont;

// Starts the intro as false
let module1IntroActive = false;
let introFullText = "";
let introCurrentText = "";
let introCharIndex = 0;

/****************************************
 *            MENU VARIABLES
 ****************************************/

// Default state of the modules (not hovered over)
let hover1 = false;
let hover2 = false;
let hover3 = false;

// Title varibles
let title = {
  x: 550,
  y: 350,
};

// Module 1 variables
let module1 = {
  x: 550,
  y: 500,
  textSize: 50,
};

// Module 2 variables
let module2 = {
  x: 550,
  y: 590,
  textSize: 50,
};

// Module 3 variables
let module3 = {
  x: 550,
  y: 680,
  textSize: 50,
};

/****************************************
 *           LOADING VARIABLES
 ****************************************/

// Variables for the loading screen text to looks like it's being typed
let loadingText = "";
let typingDoneTime = 0;
let fullText = "";
let currentText = "";
let charIndex = 0;
let typeSpeed = 4;

// Loading screen typing sound effects
let typingSound;

// Typing delay to match with sound delay
let typingStartDelay = 200; // 2 seconds
let typingStartTime = 0;

// Module Data
let module1Data;

/****************************************
 *          MODULE 1 INTRO VAR.
 ****************************************/

let speech = [];
let speechIndex = 0;

let speechSound;

/****************************************
 *         MODULE 01 - GAME VARS
 ****************************************/

// Starts the game on round 1
let round = 1;

// Variables for the bar
let barX = 200;
let barY = 600;
let barWidth = 700;
let barHeight = 40;

// Green zone inside the bar
let zoneX;
let zoneWidth;

// Skill Check Slider
let sliderX;
let sliderSpeed;
let sliderDirection = 1;

// Shows the result of each skill check
let resultText = "";
let allowInput = true;

/****************************************
 *          MODULE 2 VARIABLES
 ****************************************/

let lamentScore = 0;

// Parameters of the squares
let tileX;
let tileY;
let tileSpeed;

// shows the hot bar for the game
let lamentBarY = 600;
let tileHitWindow = 30; // Timing needs to be precise to add a layer of difficulty

/****************************************
 *           MODULE 3 VARIABLES
 ****************************************/

let sentienceHits = 0;
let flashTimer = 0;
let flashInterval = 60;
let targetNode = 0;
let currentFlash = 0;

/****************************************
 *               PRELOADS
 ****************************************/

function preload() {
  // Loads the hacker font
  hackerFont = loadFont("assets/fonts/hacker.ttf");

  // Loads the typing sound effects
  typingSound = loadSound("assets/sounds/futuristicTyping.wav");
  speechSound = loadSound("assets/sounds/speechTyping.wav");

  // Loads the JSON file
  module1Data = loadJSON("assets/data/module1.json");
}

/****************************************
 *            SETUP AND DRAW
 ****************************************/

function setup() {
  createCanvas(1100, 900);
  setupSyncRound();
  setupLamentGame();
  setupSentienceGame();
}

function draw() {
  if (state === "menu") {
    drawMenuScreen();
  } else if (state === "loading") {
    drawLoadingScreen();

    if (typingDoneTime > 0 && millis() - typingDoneTime > 2000) {
      state = nextState;

      // Module 01 Intro
      if (state === "sync") {
        speech = module1Data.syncIntro;
        speechIndex = 0;
        fullText = speech[0];
        currentText = "";
        charIndex = 0;
      }

      // Module 02 Intro
      if (state === "lament") {
        speech = module1Data.lamentIntro;
        speechIndex = 0;
        fullText = speech[0];
        currentText = "";
        charIndex = 0;
      }

      // Module 03 Intro
      if (state === "sentience") {
        speech = module1Data.sentienceIntro;
        speechIndex = 0;
        fullText = speech[0];
        currentText = "";
        charIndex = 0;
      }

      typingDoneTime = 0;
    }

    return;
  } else if (state === "sync") {
    drawModuleOneIntro();
  } else if (state === "syncGame") {
    drawSyncGameplay();
  } else if (state === "syncEnd") {
    drawSyncEnd();
  } else if (state === "lament") {
    drawModuleTwoIntro();
  } else if (state === "lamentGame") {
    drawLamentGameplay();
  } else if (state === "lamentEnd") {
    drawLamentEnd();
  } else if (state === "sentience") {
    drawModuleThreeIntro();
  } else if (state === "sentienceGame") {
    drawSentienceGameplay();
  } else if (state === "sentienceEnd") {
    drawSentienceEnd();
  } else if (state === "hiddenScreen") {
    drawHiddenScreen();
  }
}

/****************************************
 *              MENU SCREEN
 ****************************************/

function drawMenuScreen() {
  background(0);

  // Draws the title
  textSize(35);
  textFont(hackerFont);
  fill("#23ce00ff");
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER, CENTER);
  text("EIDØL0N.exe", title.x, title.y);

  // Draws each module separately
  hover1 = drawModule(
    "MODULE 01 - SYNC",
    module1.x,
    module1.y,
    module1.textSize
  );
  hover2 = drawModule(
    "MODULE 02 - LAMENT",
    module2.x,
    module2.y,
    module2.textSize
  );
  hover3 = drawModule(
    "MODULE 03 - SENTIENCE",
    module3.x,
    module3.y,
    module3.textSize
  );
}

// Detects whether or not the mouse is hovering over each module text
function drawModule(label, x, y, size) {
  textSize(size);

  let w = textWidth(label);
  let h = size;

  let hovering =
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2;

  fill(hovering ? "#4aff4a" : "#23ce00");
  text(label, x, y);

  return hovering;
}

/****************************************
 *            LOADING SCREEN
 ****************************************/

function startLoading(targetState, message) {
  nextState = targetState;

  fullText = message;
  currentText = "";
  charIndex = 0;
  typingDoneTime = 0;

  state = "loading";

  typingStartTime = millis();

  if (!typingSound.isPlaying()) {
    typingSound.loop();
    typingSound.setVolume(0.3);
  }
}

function drawLoadingScreen() {
  background(0);
  fill("#23ce00");
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(hackerFont);

  // Starts the typing after a 2 second delay to match with browser sound delays
  if (millis() - typingStartTime < typingStartDelay) {
    return;
  }

  // Typing logic
  if (charIndex < fullText.length) {
    if (frameCount % typeSpeed === 0) {
      currentText += fullText[charIndex];
      charIndex++;
    }
  } else {
    // stop th typin sounds when the text is done typing
    if (typingSound.isPlaying()) typingSound.stop();

    if (typingDoneTime === 0) {
      typingDoneTime = millis();
    }
  }

  text(currentText, width / 2, height / 2);

  if (frameCount % 40 < 20) {
    text("_", width / 2 + 200, height / 2);
  }
}

/****************************************
 *           MODULE 01 - INTRO
 ****************************************/

function drawModuleOneIntro() {
  background("#000000ff");
  
  fill("#23ce00");
  textAlign(CENTER, CENTER);
  textFont(hackerFont);

  textSize(34);
  text(currentText, width / 2, height / 2);

  // INSTRUCTIONS 
  textSize(25);
  text("Press any key to continue..", 550, 800);

  // Typing effect for the array
  if (charIndex < fullText.length) {
    if (!speechSound.isPlaying()) {
      speechSound.loop();
      speechSound.setVolume(0.3);
    }

    if (frameCount % typeSpeed === 0) {
      currentText += fullText[charIndex];
      charIndex++;
    }
  } else {
    if (speechSound.isPlaying()) speechSound.stop();
  }
}

/****************************************
 *           MODULE 01 - GAME
 ****************************************/

function setupSyncRound() {
  if (round === 1) {
    zoneWidth = 200;
    sliderSpeed = 6;
  } else if (round === 2) {
    zoneWidth = 130;
    sliderSpeed = 9;
  } else if (round === 3) {
    zoneWidth = 80;
    sliderSpeed = 12;
  }

  zoneX = random(barX + 20, barX + barWidth - zoneWidth - 20);

  sliderX = barX;
  sliderDirection = 1;

  resultText = "";
  allowInput = true;
}

function drawSyncGameplay() {
  background(0);

  // Text displaying each round
  noStroke();
  fill("#23ce00");
  textSize(40);
  textAlign(CENTER, CENTER);
  text("ROUND " + round, width / 2, 200);

  // Game Instructions
  textSize(45);
  noStroke();
  fill("#23ce00");
  text("PRESS SPACEBAR TO SYNC", width / 2, 800);

  // SYNC ZONE
  noStroke();
  fill("#23ce00");
  rect(zoneX, barY, zoneWidth, barHeight);

  // The bar's outline
  noFill();
  stroke(255);
  strokeWeight(3);
  rect(barX, barY, barWidth, barHeight);

  // Vertical Slider Line
  stroke(255);
  strokeWeight(4);
  line(sliderX, barY - 10, sliderX, barY + barHeight + 10);

  // The bounce back movement when it reaches the end of the bar
  sliderX += sliderSpeed * sliderDirection;
  if (sliderX <= barX || sliderX >= barX + barWidth) {
    sliderDirection *= -1;
  }

  // Displays if the skill check was a success or not
  noStroke();
  fill("#23ce00");
  textFont(hackerFont);
  textSize(32);
  text(resultText, width / 2, 500);
}

/****************************************
 *            MODULE 01 - END
 ****************************************/

function drawSyncEnd() {
  background("blue");

  noStroke();
  fill("#ffffffff");
  textSize(40);
  textAlign(CENTER, CENTER);
  text("MODULE 01 : SUCCESSFULLY SYNCED", width / 2, height / 2);

  textSize(35);
  text("RETURN TO MENU?", width / 2, height / 2 + 100);

  textSize(30);
  text("(Y/N)", width / 2, height / 2 + 200);
}

/****************************************
 *           MODULE 02 - INTRO
 ****************************************/

function drawModuleTwoIntro() {
  background("#000000ff");

  fill("#23ce00");
  textAlign(CENTER, CENTER);
  textFont(hackerFont);

  textSize(34);
  text(currentText, width / 2, height / 2);

  // INSTRUCTIONS 
  textSize(25);
  text("Press any key to continue..", 550, 800);

  // Typing effect for the array
  if (charIndex < fullText.length) {
    if (!speechSound.isPlaying()) {
      speechSound.loop();
      speechSound.setVolume(0.3);
    }

    if (frameCount % typeSpeed === 0) {
      currentText += fullText[charIndex];
      charIndex++;
    }
  } else {
    if (speechSound.isPlaying()) speechSound.stop();
  }
}

/****************************************
 *          MODULE 02 - GAME
 ****************************************/

function setupLamentGame() {
  lamentScore = 0;
  resetTile();
}

function drawLamentGameplay() {
  background(0);

  // TITLE
  fill("#23ce00");
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(hackerFont);
  text("LAMENT PROTOCOL", width / 2, 690);

  // Instructions
  textSize(28);
  text("ALIGN THE MEMORY FRAGMENTS", width / 2, 740);

  // Hit bar
  fill("#23ce00");
  rect(200, lamentBarY, 700, 40);

  // Square Tiles
  noFill();
  stroke("#0095ffff");
  strokeWeight(4);
  rect(tileX - 20, tileY - 20, 40, 40);

  // Tile falling movement
  tileY += tileSpeed;
  // if it goes off the screen, reset it at the top
  if (tileY > height + 50) {
    resetTile();
  }

  // shows your current score
  fill("#23ce00");
  noStroke();
  textSize(32);
  text("Fragments Stabilized: " + lamentScore + "/3", width / 2, 820);

  // if successfully align the square with the hit bar, change states to the end game
  if (lamentScore >= 3) {
    state = "lamentEnd";
  }
}

function resetTile() {
  tileX = random(300, 800);
  tileY = -50; // starts off the canvas
  tileSpeed = random(5, 9);
}

/****************************************
 *            MODULE 02 - END
 ****************************************/

function drawLamentEnd() {
  background("blue");

  noStroke();
  fill("#ffffffff");
  textSize(40);
  textAlign(CENTER, CENTER);
  text("MODULE 02 : SUCCESSFULLY ALIGNED", width / 2, height / 2);

  textSize(35);
  text("RETURN TO MENU?", width / 2, height / 2 + 100);

  textSize(30);
  text("(Y/N)", width / 2, height / 2 + 200);
}

/****************************************
 *           MODULE 03 - INTRO
 ****************************************/

function drawModuleThreeIntro() {
  background("#000000ff");

  fill("#23ce00");
  textAlign(CENTER, CENTER);
  textFont(hackerFont);

  textSize(34);
  text(currentText, width / 2, height / 2);

  // INSTRUCTIONS 
  textSize(25);
  text("Press any key to continue..", 550, 800);

  // Typing effect for the array
  if (charIndex < fullText.length) {
    if (!speechSound.isPlaying()) {
      speechSound.loop();
      speechSound.setVolume(0.3);
    }

    if (frameCount % typeSpeed === 0) {
      currentText += fullText[charIndex];
      charIndex++;
    }
  } else {
    if (speechSound.isPlaying()) speechSound.stop();
  }

}

/****************************************
 *           MODULE 03 - GAME
 ****************************************/

function setupSentienceGame() {
  sentienceHits = 0;
  flashTimer = 0;
  targetNode = floor(random(0, 3)); // chooses a random node to switch to
}

function drawSentienceGameplay() {
  background(0);

  // Game Title
  fill("#23ce00");
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont(hackerFont);
  text("TRACE THE SIGNAL", width / 2, 120);

  // Instructions for how to play
  textSize(24);
  text("PRESS SPACE WHEN THE GREEN NODE APPEARS", width / 2, 170);

  // Position of the nodes
  let nodes = [
    { x: 350, y: 400 },
    { x: 550, y: 400 },
    { x: 750, y: 400 },
  ];

  // Node flasshing
  flashTimer++;
  if (flashTimer >= flashInterval) {
    flashTimer = 0;
    currentFlash = floor(random(0, 3)); // random node flashes
  }

  // Draw nodes
  for (let i = 0; i < nodes.length; i++) {
    if (i === currentFlash) {
      // Active flashing node
      if (i === targetNode) {
        fill("#23ce00"); // green target
      } else {
        fill("#ff0000"); // red target
      }
    } else {
      noFill(); // the node is empty unless used ^
    }

    stroke(255);
    strokeWeight(3);
    ellipse(nodes[i].x, nodes[i].y, 80, 80);
  }

  fill("#23ce00");
  noStroke();
  textSize(30);
  text("Correct Signals: " + sentienceHits + "/3", width / 2, 700);

  if (sentienceHits >= 3) {
    state = "sentienceEnd";
  }
}

/****************************************
 *           MODULE 03 - END
 ****************************************/

function drawSentienceEnd() {
  background("blue");

  noStroke();
  fill("#ffffffff");
  textSize(40);
  textAlign(CENTER, CENTER);
  text("MODULE 03 : SENTIENCE\nSUCCESSFULLYCONFIRMED ", width / 2, height / 2);

  textSize(35);
  text("RETURN TO MENU?", width / 2, height / 2 + 100);

  textSize(30);
  text("(Y/N)", width / 2, height / 2 + 200);
}

/****************************************
 *             HIDDEN SCREEN
 ****************************************/

function drawHiddenScreen() {
  background(0);

  fill("#da0000ff");
  textAlign(CENTER, CENTER);
  textFont(hackerFont);

  textSize(60);
  text(currentText, width / 2, height / 2);

  // INSTRUCTIONS
  textSize(25);
  text("Press any key to continue..", 550, 800);

  // Typing effect for the array
  if (charIndex < fullText.length) {
    if (!speechSound.isPlaying()) {
      speechSound.loop();
      speechSound.setVolume(0.3);
    }

    if (frameCount % typeSpeed === 0) {
      currentText += fullText[charIndex];
      charIndex++;
    }
  } else {
    if (speechSound.isPlaying()) speechSound.stop();
  }

}

/****************************************
 *                INPUTS
 ****************************************/

// Checks to see if the modules are clikced on
function mousePressed() {
  if (state !== "menu") return; // ignore mouse clicks if we're not on the menu screen

  if (hover1) {
    startLoading("sync", "SYNC INITIALIZED");
    console.log("BEGINNING MODULE 1");
  }
  if (hover2) {
    startLoading("lament", "LAMENT PROTOCOL ENGAGED");
    console.log("BEGINNING MODULE 2");
  }
  if (hover3) {
    startLoading("sentience", "SENTIENCE ONLINE");
    console.log("BEGINNING MODULE 3");
  }
}

function keyPressed() {
  if (state === "sync") {
    if (charIndex < fullText.length) {
      charIndex = fullText.length;
      currentText = fullText;
      return;
    }

    if (speechIndex < speech.length - 1) {
      speechIndex++;
      fullText = speech[speechIndex];
      currentText = "";
      charIndex = 0;
      return;
    }

    state = "syncGame";
  }

  if (state === "lament") {
    if (charIndex < fullText.length) {
      charIndex = fullText.length;
      currentText = fullText;
      return;
    }

    if (speechIndex < speech.length - 1) {
      speechIndex++;
      fullText = speech[speechIndex];
      currentText = "";
      charIndex = 0;
      return;
    }

    state = "lamentGame";
  }

  if (state === "sentience") {
    if (charIndex < fullText.length) {
      charIndex = fullText.length;
      currentText = fullText;
      return;
    }

    if (speechIndex < speech.length - 1) {
      speechIndex++;
      fullText = speech[speechIndex];
      currentText = "";
      charIndex = 0;
      return;
    }

    if (speechSound.isPlaying()) speechSound.stop();
    setupSentienceGame();

    state = "sentienceGame";
  }

  if (state === "hiddenScreen") {
    if (charIndex < fullText.length) {
      charIndex = fullText.length;
      currentText = fullText;
      return;
    }

    if (speechIndex < speech.length - 1) {
      speechIndex++;
      fullText = speech[speechIndex];
      currentText = "";
      charIndex = 0;
      return;
    }

    if (speechSound.isPlaying()) speechSound.stop();
    setupSentienceGame();

    state = "menu";
  }

  // Spacebar functions on the game screen
  if (state === "syncGame" && allowInput) {
    if (key === " ") {
      allowInput = false;

      // If the user presses the spacebar WITHIN THE GREEN ZONE, then it's a success
      if (sliderX >= zoneX && sliderX <= zoneX + zoneWidth) {
        // SUCCESS
        resultText = "SYNC SUCCESS";

        // Change to next state if round 3 has been passed
        setTimeout(() => {
          round++;
          if (round > 3) {
            state = "syncEnd";
          } else {
            setupSyncRound();
          }
        }, 1000); // Wait 0.6 seconds before resetting to next state
      } else {
        // If a user fails to hit the spacebar within the green zone
        resultText = "MISALIGNMENT DETECTED";

        setTimeout(() => {
          setupSyncRound();
        }, 600); // wait 0.6 seconds before restarting each round
      }
    }
  }

  // Uses the spacebar to proceed throughout the game
  if (state === "lamentGame") {
    if (key === " ") {
      if (abs(tileY - lamentBarY) < tileHitWindow) {
        lamentScore++; // if successful, add 1 to the score
        resetTile();
      } else {
        resetTile(); // otherwise, just reset the tile
      }
    }
  }

  if (state === "sentienceGame") {
    if (key === " ") {
      if (currentFlash === targetNode) {
        sentienceHits++;
      }
      // force next flash
      flashTimer = flashInterval;
    }
  }

  // Changes back to the menu screen if Y is pressed and it is the end screen
  if (state === "syncEnd") {
    if (key === "y" || key === "Y") {
      state = "menu";
    } else if (key === "n" || key === "N") {
      speech = module1Data.hiddenSequence;
      speechIndex = 0;
      fullText = speech[0];
      currentText = "";
      charIndex = 0;

      state = "hiddenScreen";
    }
  }

  if (state === "lamentEnd") {
    if (key === "y" || key === "Y") {
      state = "menu";
    } else if (key === "n" || key === "N") {
      speech = module1Data.hiddenSequence;
      speechIndex = 0;
      fullText = speech[0];
      currentText = "";
      charIndex = 0;

      state = "hiddenScreen";
    }
  }

  if (state === "sentienceEnd") {
    if (key === "y" || key === "Y") {
      state = "menu";
    } else if (key === "n" || key === "N") {
      speech = module1Data.hiddenSequence;
      speechIndex = 0;
      fullText = speech[0];
      currentText = "";
      charIndex = 0;

      state = "hiddenScreen";
    }
  }
}
