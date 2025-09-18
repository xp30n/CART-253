/**
 * Variables Challenge
 * Aliyah R.W.!! 
 * 
 * My version of the variables challenge 🛸
 */

"use strict";

// Our friend Mr. Furious' head
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 225
  }
};

// Mr.Furious' torso
let mrFuriousTorso = {
  x: 185,
  y: 240,
  width: 30,
  height: 79
};

// the top of Mr.Furious' shirt
let mrFuriousShirt = {
  // Position and size
  x: 200,
  y: 310,
  size: 90,

  // The color that he chose today
  fill: {
    r: 128,
    g:0,
    b: 128
  }
};

// the rest of Mr. Furious' shirt
let mrFuriousShirtBtm = {
  x: 155,
  y: 315,
  width: 90,
  height: 85
};


/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
  background(160, 180, 200);
  
  // Draw Mr. Furious as a coloured circle
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();

  // Mr. Furious shirt and neck:3
  push();
  noStroke();
  fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
  rect(mrFuriousTorso.x, mrFuriousTorso.y, mrFuriousTorso.width, mrFuriousTorso.height);
  fill(mrFuriousShirt.fill.r, mrFuriousShirt.fill.g, mrFuriousShirt.fill.b);
  ellipse(mrFuriousShirt.x, mrFuriousShirt.y, mrFuriousShirt.size);
  rect(mrFuriousShirtBtm.x, mrFuriousShirtBtm.y, mrFuriousShirtBtm.width, mrFuriousShirtBtm.height);
  pop();


}