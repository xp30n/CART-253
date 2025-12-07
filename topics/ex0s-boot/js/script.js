"use strict";

let hackerFont;

let greenBackground;

function preload() {
  // Loads the hacker font
  hackerFont = loadFont("assets/fonts/hacker.ttf");
}

/**
 * setup
 */
function setup() {
  createCanvas(windowWidth, windowWidth);
}

/**
 * draw
 */
function draw() {
  // Makes the background black
  background(0);

  // Draws the title
  textSize(35);
  textFont(hackerFont);
  fill("#23ce00ff");
  stroke(0);
  strokeWeight(4);
  textAlign(CENTER, CENTER);
  text("EXØS.exe\n[BOOT]\n_PR0TØCOL", 530, 460);

  drawScanlines();

  drawFlicker();
}

// "Welcome back 'A N O N Y M O U S_' 

// function beginModule() {

// }

function drawScanlines() {
  push();
  stroke(0, 255, 0, 15); // greenish + transparent
  for (let y = 0; y < height; y += 3) {
    line(0, y, width, y);
  }
  pop();
}

function drawFlicker() {
  push();
  fill(0, 255, 0, random(2, 5));
  rect(0, 0, width, height);
  pop();
}
