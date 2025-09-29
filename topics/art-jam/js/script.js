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
    }
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

    // Lia's body
    push();
    noStroke();
    fill(liaBody.fill.r, liaBody.fill.g, liaBody.fill.b);
    rect(liaBody.x, liaBody.y, liaBody.w, liaBody.h, liaBody.br);
    pop();
    
    // Lia's Ski Mask - BE AWARE, THERE ARE A LOT OF SHAPES...
    push();
    noStroke();
    fill(liaMask.fill.r, liaMask.fill.g, liaMask.fill.b);
    ellipse(width/2, 450, 350, 350);
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

    // Face cutout of the ski mask
    push();
    noStroke();
    fill(255, 255, 255);
    rect(250, 420, 300, 100);
    pop();

    // Top half of face cutout
    
}