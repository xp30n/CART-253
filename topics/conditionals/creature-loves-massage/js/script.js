/**
 * Creature Loves Massage
 * Aliyah Renomeron-Ward
 * 
 * A creature that responds to mouse massage by changing colour
 */

"use strict";

// Our creature
const creature = {
    // Position
    x: 200,
    y: 200,
    // Size
    size: 200,
    // Fill
    fill: "#000000", // Starts out bored
    // Possible fills for the creature that show its mood
    // We'll need these when we start changing its colour
    // and its nice to keep them along with all the other info
    // about the creature
    fills: {
        bored: "#000000", // Black
        happy: "#33cc33", // Green
        angry: "#cc3333" // Red
    }
};

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Fills the background, displays the creature 
 */
function draw() {
    background(255, 200, 127);

    checkInput();
    drawCreature();
}

/**
 * Responds to user input
 */
function checkInput() {

    const distance = dist(mouseX, mouseY, creature.x, creature.y);
    const mouseOverlapsCreature = (distance < creature.size/2); // on this line, checking whether the distance between the mouse and the creature is less than the radius (diameter/2)

    const mouseIsMoving = (movedX !== 0 || movedY !== 0); // ! means that something is NOT and the == means equals, so it means !== not equal to
    // movement is keeping the creature interested. If the mouse is not moving, the creature will be bored, but as soon as you start moving the mouse WITHIN the circle, it becomes happy 

   if (mouseOverlapsCreature && mouseIsMoving) {
    creature.fill = creature.fills.happy;
   }
   else {
    creature.fill = creature.fills.bored;
   }
}

/**
 * Draws the creature
 */
function drawCreature() {
    push();
    noStroke();
    // Use the creature's fill
    fill(creature.fill);
    // Display the creature at its position and size
    ellipse(creature.x, creature.y, creature.size);
    pop();
}