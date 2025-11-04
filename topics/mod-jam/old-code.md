// Croaksworth's head
    // push();
    // noStroke();
    // fill("#50c878");
    // ellipse(width / 2, height / 2, 200, 150)
    // pop();

    // // Left Eye
    // push();
    // noStroke();
    // fill("#50c878");
    // ellipse(360, 220, 60, 80)
    // pop();

    // // Left Pupil
    // push();
    // noStroke();
    // fill("#000000ff");
    // ellipse(360, 220, 40, 50)
    // pop();

    // // Right Eye
    // push();
    // noStroke();
    // fill("#50c878");
    // ellipse(480, 220, 60, 80)
    // pop();

    // // Right Pupil
    // push();
    // noStroke();
    // fill("#000000ff");
    // ellipse(480, 220, 40, 50)
    // pop();


    let speechBubble = {
    x: 160,
    y: 260,
    w: 340,
    h: 55,
    br: 20
}

// The frog will give us a quest
const speech = [
    "Huzzah! A willing assistant!",
    "Welcome traveler",
    "to the sacred bog of Eternal Hunger.",
    "My name is Sir Croaksworth,",
    "Devourer of Destinies,",
    "...and flies.",
    "But alas,",
    "I have not eaten in centuries.",
    "Aid me, traveler!",
    "Catch these flies, noble stranger,",
    "and I shall grant you...",
    "probably something important.",
    "Thanks!"
];

let speechIndex = 0;

// loads the custom font
let pixelFont;

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
}

function draw() {
    background("#87ceeb");
    // moveFly();
    drawFly();
    // moveFrog();
    // moveTongue();
    drawFrog();
    checkTongueFlyOverlap();

    // Draws the speech bubble
    drawSpeechBubble();

    // display the frog's speech
    let currentLine = speech[speechIndex]; // Displays the current line of the speech

    // Display the line
    push();
    fill(255);
    textSize(22);
    textFont(pixelFont);
    textAlign(CENTER, CENTER);
    text(currentLine, 330, 287);
    pop();
}

function preload() {
    pixelFont = loadFont('assets/fonts/pixel-game.otf');
}

function drawSpeechBubble() {
    push();
    noStroke();
    fill(0);
    rect(
        speechBubble.x,
        speechBubble.y,
        speechBubble.w,
        speechBubble.h,
        speechBubble.br
    );
    pop();
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size/2 + fly.size/2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}

function keyPressed() {
    // Displays the next sentence on mouse click
    speechIndex = speechIndex + 1;
}