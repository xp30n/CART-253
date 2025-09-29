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

let liasMask = {
    fill: {
        r: 44,
        g: 55,
        b: 242,
    }
};

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
    
    // LIA'S SKI MASK - BE AWARE, THERE ARE A LOT OF SHAPES...
    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    ellipse(width/2, 450, 350, 350);
    pop();

    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    quad(180, 500, 400, 500, 620, 500, 260, 280);
    pop();

    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    quad(180, 500, 400, 700, 620, 500, 520, 230);
    pop(); 

    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    quad(180, 500, 290, 700, 490, 700, 620, 500);
    pop(); 

    // SKI MASK BASE/NECK AREA
    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    quad(210, 750, 280, 600, 490, 600, 580, 750);
    pop();

    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    quad(220, 650, 400, 500, 560, 670, 400, 750);
    pop();

    // THE EARS OF THE MASK
    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    triangle(216, 400, 350, 20, 330, 290);
    pop();

    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    triangle(583, 400, 450, 20, 456, 290);
    pop();
}