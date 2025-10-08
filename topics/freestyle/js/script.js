/**
 * Game States
 * Aliyah Renomeron-Ward
 *
 *
 * Deciding how to go about making a game
 */

"use strict";

let finishState = "none";
let gameState = "start";
let score = "0";

let timer = {
  startTime: 0,
  timePassed: 0,
  timeInterval: 10000,
};

/**
 * sets up the game
 */

function setup() {
  createCanvas(500, 500);
  background(0);
  setTimeout(startTheGame, 5000);
}

// event handler for timeer - don't put it in the draw, otherwise it's just going to run infinitely. Eventually the program will just crash. That's why you put it in the setup.
function startTheGame() {
  gameState = "play";
  timer.startTime = millis;
}

// "if statements" rely on true or false variables (boolean) - meaning there are only two possibilities

/**
 * All the different screens of my game
 */
function draw() {
  // console.log(millis());
  if (gameState == "start") {
    startScreen();
  } else if (gameState == "play") {
    gamescreen();
  } else if (gameState === "end") {
    endScreen();
  }
}

function startScreen() {
  background("#87CEEB");
}

function gamescreen() {
  console.log("in game screen");
  background("#1F51FF");
  displayRect();
  displayScore();
  displayTimer();
  //console.log(timer.startTime);
  timer.timePassed = millis() - timer.startTime;

  if (timer.timePassed > timer.timeInterval) {
    gameState = "end";
  }
}

function endScreen() {
  background("#C41E3A");
}

function mousePressed() {
  if (gameState === "play") {
    if (mouseX < width / 3) {
      score++; // if the mouse is on the 1st 3rd of the screen, the score will go up
    } else {
      score--; // if you click off the white rectangle, your score will go down
    }
  } //play
}

function displayRect() {
  push();
  fill(255);
  rect(0, 0, width / 3, 500);
  pop();
}

function displayScore() {
    push();
    textSize(24);
    fill(255);
    text(score, width - 150, 50);
    pop();
  }

function displayTimer() {
  push();
  textSize(24);
  fill(255);
  text(10 - floor(timer.timePassed/1000), width - 150, 120);
  pop();
}
