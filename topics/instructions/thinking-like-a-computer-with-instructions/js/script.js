/**
 * Thinking like a computer with instructions
 * Aliyah
 * September 10th, 2025
 *
 * An ultra simple example of instructions
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
  // "setup" is a p5 instruction in order to run our functions - as soon as the JavaScript loads, it will see the "setup" functoin and run it once
  createCanvas(400, 400);
  console.log("Hello World!");
}

/**
 * Sets background, draws the eye
 */
function draw() {
  // after "setup" is run once, the "draw" function will run over and over again - the closing curly bracket of "draw" is the end of the loop, and basically tells the computer to go back to the start of "draw" and run it again
  // The void
  background("#0b28ffff");
  fill("#004484ff"); // you need to call fill before you draw the shape. If you put it under the shape, the color won't apply to that shape. You can even call it twice to change colors between shapes
  ellipse(200, 200, 300);
  rect(100, 100, 50, 30);
  liasFunction();

  // The eye
  drawEye();
}

// It's important to be checking the console log (on your browser) to check if there are any errors. It wil tell you what the error is and what line it's on.
// In order to be able to use the "draw" function, you NEED to have the "createCanvas" function in the setup

/**
 * Draws a creepy void eye
 
function drawEye() {
    // Eyeball
    push();
    noStroke();
    fill("#ffffff");
    ellipse(200, 200, 100);
    pop();

    // Retina
    push();
    noStroke();
    fill("#000000");
    ellipse(200, 200, 25);
    pop();
}
*/

// You can create your own functions, but you need to make sure that you call them in order for them to run. "Draw" & "setup" are functions that are in the p5 library, so they will run automatically. But if you create your own function, you need to call it in order for it to run. In this case, we called "drawEye" inside the "draw" function, so it will run every time "draw" runs.

function liasFunction() {
  console.log.apply("This is my function!");
  fill(0, 121, 255);
  rect(200, 300, 80, 60);
}

// When you call your function, you place it inside another function for it to appear. In this case, we called "liasFunction" inside the "draw" function, so it will run every time "draw" runs.
