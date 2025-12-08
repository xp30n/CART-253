"use strict";

let state = "menu"

// Loads the font
let hackerFont;

/****************************************
 *            MENU VARIABLES
 ****************************************/

// Default state of the modules (not hovered over)
let hover1 = false
let hover2 = false
let hover3 = false

// Title varibles
let title = {
  x: 550,
  y: 350
}

// Module 1 variables
let module1 = {
  x: 550,
  y: 500,
  textSize: 50
}

// Module 2 variables
let module2 = {
  x: 550,
  y: 590,
  textSize: 50
}

// Module 3 variables
let module3 = {
  x: 550,
  y: 680,
  textSize: 50
}

/****************************************
 *               PRELOADS
 ****************************************/

function preload() {
  // Loads the hacker font
  hackerFont = loadFont("assets/fonts/hacker.ttf");
}

/****************************************
 *            SETUP AND DRAW
 ****************************************/

function setup() {
  createCanvas(1100, 900);
}

function draw() {
  if (state === "menu") {
    drawMenuScreen();
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
  hover1 = drawModule("MODULE 01 - SYNC", module1.x, module1.y, module1.textSize);
  hover2 = drawModule("MODULE 02 - LAMENT", module2.x, module2.y, module2.textSize);
  hover3 = drawModule("MODULE 03 - SENTIENCE", module3.x, module3.y, module3.textSize);
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
 *                INPUTS
 ****************************************/

// Checks to see if the modules are clikced on
function mousePressed() {
  if (hover1) {
    console.log("BEGINNING MODULE 1");
    // state = "SYNC";
  }
  if (hover2) {
    console.log("BEGINNING MODULE 2");
    // state = "LAMENT";
  }
  if (hover3) {
    console.log("BEGINNING MODULE 3");
    // state = "SENTIENCE";
  }
}

// "Welcome back 'A N O N Y M O U S_'
