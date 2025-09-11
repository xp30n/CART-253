/**
 * Instructions Challenge
 * Aliyah 
 * September 10th, 2025
 * 
 * This is my submission for the Instructions Challenge! 
 * It depicts a clear night, where a alien spaceship sits atop a hill, gazing at the moon and the stars.
 * 
 */

"use strict";



/**
 * 
*/
function setup() {
    createCanvas(900, 600);
}


// The drawing in its entirety
function draw() {

    // The sky
    background(20, 52, 164);

    // The moon
    push();
    noStroke();
    ellipse(120, 120, 200);
    fill(20, 52, 164)
    noStroke();
    ellipse(185, 120, 200);    
    pop();

    // The ground
    push();
    noStroke();
    fill(173, 216, 230);
    ellipse(200, 550, 900, 400, 50, 15, 10, 5);
    pop();

    // The craters on the moon
    push();
    fill(70, 130, 180);
    noStroke();
    ellipse(70, 530, 100);
    ellipse(390, 445, 70);
    ellipse(170, 400, 55);
    ellipse(590, 540, 65);
    ellipse(200, 530, 25);
    pop();

    // The Alien   
    push();
    fill(170, 255, 0); // alien's head
    stroke(9, 121, 105);
    strokeWeight(7);
    quad(400, 400, 470, 375, 400, 315, 315, 375); //spaceship body
    fill(170, 255, 0);
    ellipse(400, 300, 75, 75);
    fill("black"); // eyeball
    noStroke();
    ellipse(400, 290, 15, 25);
    fill("white"); // alien's iris
    ellipse(400, 290, 10, 10);
    pop();
}