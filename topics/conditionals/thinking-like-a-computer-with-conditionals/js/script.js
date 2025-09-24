/**
 * Thinking like a computer with conditionals
 * Aliyah Renomeron-Ward
 * 
 * A simple program to make sure we understand conditionals.
 */

"use strict";

let spider = {
    x: 200,
    y: 200,
    size: 50,
    speedX: 2,
    speedY: 4
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}

function moveCircle() {
    spider.x += spider.speedX; // this is the same as saying spider.x = spider.x + speedX
    spider.y += spider.speedY;

    if(spider.y > height || spider.y < 0) { // you cannot use && for this because the X and the Y are two independant conditions. You don't want to combine them, but do them separately
        // spider.y = 0;
        spider.speedY = spider.speedY * -1;
    }

    // the || (OR) statement can also do the same as the lines of code below: 

    // // this will make it so that when the ball reaches the top, it will also bounce off.
    // if(spider.y < 0 ) {
    //     // spider.y = 0;
    //     spider.speedY = spider.speedY * -1;
    // }


    if(spider.x > width) {
        // spider.x = 0;
        spider.speedX = spider.speedX * -1;
    }

    if(spider.x < 0) {
        // spider.x = 0;
        spider.speedX = spider.speedX * -1;
    }

}

// if you want to 

/**
 * Draw shapes based on conditions
 */
function drawCircle() {
    push();
    fill("#ff0000");
    noStroke();
    ellipse(spider.x, spider.y, spider.size, spider.size);
    pop();
}

function draw() {
    background("black");
    drawCircle();
    moveCircle();
}