/**
 * Variables Challenge
 * Aliyah R.W.!! 
 * 
 * Mr. Furious is angry because there's an alien about to abduct him but he just got married. 
 * I would be angry too, Mr. Furious. I would be too...
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

// color of the background
let skyShade = {
  r: 160,
  g: 180,
  b: 200
};

// Size and positioning of UFO
let ufo = {
  x: 60,
  y: 70,
  width: 100,
  height: 30,

  // The aliens favourite color
  fill: {
    r: 207,
    g: 159,
    b: 255
  }
};


/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Drawings of Mr. Furious
 */
function draw() {

  // Changes the background from day to night
  background(skyShade.r, skyShade.g, skyShade.b);

  skyShade.r -= 1;
  skyShade.g -= 1;
  skyShade.b -= 0;
  
  mrFurious.fill.r = mrFurious.fill.r;
  mrFurious.fill.g = mrFurious.fill.g - 2;
  mrFurious.fill.b = mrFurious.fill.b - 2;

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

  push();
  fill(ufo.fill.r, ufo.fill.g, ufo.fill.b);
  noStroke();
  ellipse(ufo.x, ufo.y, ufo.width, ufo.height);
  pop();
}