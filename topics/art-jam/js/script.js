/**
 * Art Jam Assignment
 * Aliyah Renomeron-Ward
 *
 * This is a visual representation of how Lia feels and how she thinks she looks:p
 * It's super sick right?...
 * No?
 * Okay...
 */

"use strict";

// Lia's mask (DUH)
let liaMask = {
  fill: {
    r: 0,
    g: 0,
    b: 128,
  },
};

let liaBody = {
  // Body Dimensions
  x: 166,
  y: 725,
  w: 450,
  h: 425,
  br: 160, // border radius (don't forget!!)

  // Color of her shirt today:3
  fill: {
    r: 0,
    g: 0,
    b: 0,
  },
};

// skin color
let face = {
  x: 250,
  y: 420,
  w: 300,
  h: 100,
  isShy: true,

  fill: {
    r: 218,
    g: 160,
    b: 109,
  },
};

// dimensions and color of Lia's left pupil
let leftPupil = {
  x: 320,
  y: 470,
  w: 70,
  h: 70,

  fill: {
    r: 0,
    g: 0,
    b: 0,
  }
}

// dimensions and color of Lia's right pupil
let rightPupil = {
  x: 480,
  y: 470,
  w: 70,
  h: 70,

  fill: {
    r: 0,
    g: 0,
    b: 0,
  }
}

function mousePressed() {
  if (mouseX > face.x - face.w/2 && mouseX < face.x + face.w/2 && mouseY > face.y - face.h/2 && mouseY < face.y + face.h/2) {
    if (face.isShy) {
      // start blushing
      face.fill.r = 218;
      face.fill.g = 131;
      face.fill.b = 109;
      face.isShy = false;
    } else {
      // goes back to being regular Lia
      face.fill.r = 218;
      face.fill.g = 160;
      face.fill.b = 109;
      face.isShy = true;
    }
  }
}


/**
 * Creates the canvas
 */
function setup() {
  createCanvas(800, 850);
  background(137, 207, 240);
}

/**
 * Parts of my self portrait
 */
function draw() {
  /**
   * Lia's Body
   */
  push();
  noStroke();
  fill(liaBody.fill.r, liaBody.fill.g, liaBody.fill.b);
  rect(liaBody.x, liaBody.y, liaBody.w, liaBody.h, liaBody.br);
  pop();

  /**
   * Lia's Ski Mask - BE AWARE, THERE ARE A LOT OF SHAPES...
   */

  push();
  noStroke();
  fill(liaMask.fill.r, liaMask.fill.g, liaMask.fill.b);
  ellipse(width / 2, 450, 350, 350);
  pop();

  push();
  noStroke();
  fill(liaMask.fill.r, liaMask.fill.g, liaMask.fill.b);
  quad(180, 500, 400, 500, 620, 500, 260, 280);
  pop();

  push();
  noStroke();
  fill(liaMask.fill.r, liaMask.fill.g, liaMask.fill.b);
  quad(180, 500, 400, 700, 620, 500, 520, 230);
  pop();

  push();
  noStroke();
  fill(liaMask.fill.r, liaMask.fill.g, liaMask.fill.b);
  quad(180, 500, 290, 700, 490, 700, 620, 500);
  pop();

  // Ski mask base/neck
  push();
  noStroke();
  fill(liaMask.fill.r, liaMask.fill.g, liaMask.fill.b);
  quad(210, 750, 280, 600, 490, 600, 580, 750);
  pop();

  push();
  noStroke();
  fill(liaMask.fill.r, liaMask.fill.g, liaMask.fill.b);
  quad(220, 650, 400, 500, 560, 670, 400, 750);
  pop();

  // Left ear of the ski mask
  push();
  noStroke();
  fill(liaMask.fill.r, liaMask.fill.g, liaMask.fill.b);
  triangle(216, 400, 350, 10, 340, 290);
  pop();

  // Right ear of the ski mask
  push();
  noStroke();
  fill(liaMask.fill.r, liaMask.fill.g, liaMask.fill.b);
  triangle(583, 400, 450, 10, 456, 290);
  pop();

  /**
   * Face cutout of the ski mask
   */
  // Middle face cutout 
  push();
  noStroke();
  fill(face.fill.r, face.fill.g, face.fill.b);
  rect(face.x, face.y, face.w, face.h);
  pop();

  // Bottom half of face cutout
  push();
  noStroke();
  fill(face.fill.r, face.fill.g, face.fill.b);
  triangle(250, 520, 400, 560, 550, 520);
  pop();

  // Top half of face cutout
  push();
  noStroke();
  fill(face.fill.r, face.fill.g, face.fill.b);
  triangle(250, 420, 400, 390, 550, 420);
  pop();

  push();
  noStroke();
  fill(face.fill.r, face.fill.g, face.fill.b);
  triangle(250, 520, 400, 560, 290, 570);
  pop();

  push();
  noStroke();
  fill(face.fill.r, face.fill.g, face.fill.b);
  triangle(400, 560, 551, 519, 498, 570);
  pop();

  /**
   * EYES
   */

  // Left eye
  push();
  stroke(0);
  strokeWeight(4);
  fill(255, 255, 255);
  ellipse(320, 470, 100, 100);
  pop();

  // Pupil
  push();
  noStroke();
  fill(leftPupil.fill.r, leftPupil.fill.g, leftPupil.fill.b);
  ellipse(leftPupil.x, leftPupil.y, leftPupil.w, leftPupil.h);
  pop();

  // Top Eyeliner
  push();
  noStroke();
  fill(0, 0, 0);
  rect(268, 422, 105, 50);
  pop();

  // Eyelid 
  push();
  noStroke();
  fill(face.fill.r, face.fill.g, face.fill.b);
  rect(267, 418, 107, 50);
  pop();

  // Right eye
  push();
  stroke(0);
  strokeWeight(4);
  fill(255, 255, 255);
  ellipse(480, 470, 100, 100);
  pop();

  // Pupil
  push();
  noStroke();
  fill(rightPupil.fill.r, rightPupil.fill.g, rightPupil.fill.b);
  ellipse(rightPupil.x, rightPupil.y, rightPupil.w, rightPupil.h);
  pop();

  // Top Eyeliner
  push();
  noStroke();
  fill(0, 0, 0);
  rect(427, 422, 105, 50);
  pop();

  // Eyelid
  push();
  noStroke();
  fill(face.fill.r, face.fill.g, face.fill.b);
  rect(427, 418, 105, 50);
  pop();

  /**
   * Right Eyelashes
   */

  // Corner eyelash
  push();
  noStroke();
  fill(0, 0, 0);
  triangle(530, 468, 550, 468, 525, 490);
  pop();

  // white inside
  push();
  noStroke();
  fill(255, 255, 255);
  triangle(520, 472, 540, 472, 507, 500);
  pop();

  // second
  push();
  noStroke();
  fill(0, 0, 0);
  triangle(527, 488, 550, 503, 521, 501);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  triangle(520, 488, 541, 500, 520, 497);
  pop();

  // third
  push();
  noStroke();
  fill(0, 0, 0);
  triangle(510, 507, 510, 535, 498, 516);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  triangle(505, 502, 507.5, 526, 498, 508);
  pop();

  /**
   * LEFT EYELASHES
   */

  // Corner eyelash
  push();
  noStroke();
  fill(0, 0, 0);
  triangle(270, 468, 250, 468, 275, 490);
  pop();

  // white inside
  push();
  noStroke();
  fill(255, 255, 255);
  triangle(281, 472, 260, 472, 293, 500);
  pop();

  // second
  push();
  noStroke();
  fill(0, 0, 0);
  triangle(273, 488, 250, 503, 279, 501);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  triangle(280, 488, 259, 500, 280, 497);
  pop();

  // third
  push();
  noStroke();
  fill(0, 0, 0);
  triangle(290, 507, 290, 535, 302, 516);
  pop();

  push();
  noStroke();
  fill(255, 255, 255);
  triangle(295, 502, 292.5, 526, 302, 508);
  pop();

  /**
   * 
   */
  // Right eyebrow
  push();
  strokeWeight(6);
  fill(0, 0, 0);
  line(430, 450, 530, 430);
  pop();

  // Left eyebrow
  push();
  strokeWeight(6);
  fill(0, 0, 0);
  line(370, 450, 270, 430);
  pop();
}