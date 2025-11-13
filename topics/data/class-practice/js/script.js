/**
 * Title of Project
 * Aliyah R.W.
 *
 */

"use strict";

function preload() {
  jsonData = loadJSON("assets/data/mazeClass.json");
}

let cellSize = 125;
let numCols = 4;
let numRows = 4;

let currentMaze = null;

let jsonData;

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(500, 500);

  // Get first maze
  currentMaze = jsonData.mazes[0];
  console.log(currentMaze);
  numCols = currentMaze.length;
  numRows = currentMaze.length;
  cellSize = width / currentMaze.length;
}

/**
 * Draws the canvas
 */
function draw() {
  background(0);

  drawMaze();
}

function drawMaze() {
  // drawing the maze
  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      //
      if (currentMaze[i][j] === 1) drawCell(i, j);
    }
  }
}

function drawCell(x, y) {
  fill("midnightblue");
  rectMode(CORNER);
  rect(x * cellSize, y * cellSize, cellSize, cellSize);
}
