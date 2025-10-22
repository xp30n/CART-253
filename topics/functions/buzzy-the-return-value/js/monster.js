"use strict";

// let monster = {
//     name: "Monsta",
//     color: "#702963",
//     legs: 2
// };

// let goblin = {
//     name: "Goblin",
//     color: "#800080",
//     legs: 2
// };

// the better way to write the above function

let monster = createMonster("Monsta");
let goblin = createMonster("Goblin");

function createMonster(monsterName) { // the variable that goes inside the parameter is the variable that will change each time you call a function. 
    let monster = {
        name: monsterName, // Parameter
        color: "#702963", // Default
        legs: random(0,4) // Dynamic
    };
    return monster;
}

// this version is simplified and very easy to read, as well as much more flexible, because if you want to change a variable that is constant between ALL monsters, you simply have to add it once! 