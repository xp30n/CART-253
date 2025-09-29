/**
 * Art Jam Assignment
 * Aliyah
 * 
 * This is a visual representation of how Lia feels and how she thinks she looks:p
 * It's super sick right?...
 * No?
 * Okay...
 */

"use strict";

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
    
    // Lia's ski mask - BE AWARE, THERE ARE A LOT OF SHAPES...
    push();
    noStroke();
    fill(0, 0, 139);
    ellipse(width/2, 450, 350, 350);
    pop();

    push();
    noStroke();
    fill(0, 0, 139);
    ellipse(width/2, 490, 350, 350);
    pop();

    push();
    noStroke();
    fill(0, 0, 139);
    quad(180, 500, 400, 700, 620, 500, 400, 300);
    pop();

    push();
    noStroke();
    fill(0, 0, 139);
    quad(180, 500, 400, 700, 620, 500, 260, 230);
    pop();

    push();
    noStroke();
    fill(0, 0, 139);
    quad(180, 500, 400, 700, 620, 500, 520, 230);
    pop(); 

    push();
    noStroke();
    fill(8, 24, 168);
    quad(180, 500, 290, 700, 490, 700, 620, 500);
    pop(); 
}