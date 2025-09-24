/**
 * Movement
 * Aliyah Renomeron-Ward
 * 
 * Practicing with movement
 */

"use strict";


let bird = {
    x: 120,
    y: 480,
    size: 50,
    velocity: { 
        x: 0,
        y: 0
    },
    minVelocity: {
        x: -3,
        y: -2
    },
    maxVelocity: {
        x: 3,
        y: 2
    },

    acceleration: {
        x: 0.025,
        y: -0.2
    }
};

/**
 * creates the canvas
*/
function setup() {
    createCanvas(640, 480);
}


/**
 * move the bird and display it
*/
function draw() {
    background(0);

    // move the bird
    bird.velocity.x += bird.acceleration.x; // this is the same as saying "bird.velocity.x = bird.velocity.x + bird.acceleration.x;", just making it shorter
    bird.velocity.y += bird.acceleration.y;

    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);

    bird.x = bird.x + bird.velocity.x; // this is an application of velocity
    bird. y = bird.y + bird.velocity.y; // even if this velocity is a negative number, you still need to use + because we are always ADDING velocity

    // draw the bird
    push();
    fill(255, 0,0);
    noStroke();
    ellipse(bird.x, bird.y, bird.size);
    pop();
}