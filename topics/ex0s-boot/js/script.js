"use strict";

let hackerFont;

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
}



// "Welcome back 'A N O N Y M O U S_' 