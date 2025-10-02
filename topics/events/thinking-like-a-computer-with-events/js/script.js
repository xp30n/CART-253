/**
 * Thinking like a computer with events
 * Aliyah Renomeron-Ward
 * 
 * A small project for exploring how events work!
*/

"use strict";

let face = {
    x: 0,
    y: 0,
    size: 20,
    color: "#0096FF",
    isBlue: true,
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);
    face.x = width/2;
    face.y = height/2;
    
}

/**
 * Draw a rectangle
*/
function draw() {
    background("pink");
    push();
    fill(face.color);
    noStroke();
    ellipse(face.x, face.y, face.size, face.size);
    pop();
    
}


/**
 * Fill the background on click
 */
function mousePressed() {
    // face.x = mouseX
    // face.y = mouseY

    let distance = dist(face.x, face.y, mouseX, mouseY);
    if(distance<face.size/2) {
        if(face.isBlue === true) {
            face.color = "#00A36C"
            face.isBlue = false;
        }
        else{
            faceColor =  "#0096FF";
            face.isBlue = true;
        }
    }
}

function keyPressed (event) {
    console.log(event)
    console.log(event.key)
    if (event.key);
}