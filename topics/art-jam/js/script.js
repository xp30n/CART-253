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
        r: 0,
        g: 0,
        b: 139,
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
    
    // Lia's ski mask - BE AWARE, THERE ARE A LOT OF SHAPES...
    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    ellipse(width/2, 450, 350, 350);
    pop();

    push();
    noStroke();
    fill(liasMask.fill.r, liasMask.fill.g, liasMask.fill.b);
    quad(180, 500, 400, 700, 620, 500, 260, 230);
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

    // ski mask base/neck
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
}