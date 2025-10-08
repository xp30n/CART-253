/**
 * Game States
 * Aliyah Renomeron-Ward
 * 
 * 
 * Deciding how to go about making something
 */

"use strict";

/**
 * sets up the game
*/
function setup() {
    createCanvas(500, 500);
    background(0)
}

// "if statements" rely on true or false variables (boolean) - meaning there are only two possibilities

/**
 * All the different screens of my game
*/
function draw() {

    startScreen();

}

function startScreen() {
    background("#87CEEB");
}

function gamescreen() {
    console.log("in game screen");
    background("#1F51FF");
}

function endScreen() {
    background("#1434A4");
}

function mousePressed() {
    gamescreen()
}