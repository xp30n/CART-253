/**
 * Circle Master
 * Aliyah Renomeron-Ward
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000",
  fills: {
    noOverlap: "#ff0000",
    overlap: "purple",
  },
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#1900ffff",
};

const target = {
  x: 100,
  y: 100,
  size: 90,
  fill: "#0096FF",
  fills: {
    noOverlap: "#0096ff",
    overlap: "#DA70D6"
  }
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

// Check for overlap and move the puck based on the position of the user
function movePuck() {
  // calculatting the distance between the user's and the puck's center
  const d = dist(user.x, user.y, puck.x, puck.y);

  // checking to see if they are overlapping
  const overlap = d < user.size / 2 + puck.size / 2;

  // if the user is on the left,
  if (overlap && user.x < puck.x) {
    puck.x = puck.x + 2; // then move the puck to the right
  }

  //if the user is on the right,
  if (overlap && user.x > puck.x) {
    puck.x = puck.x - 2; // move the puck to the left
  }

  // if the user is on the bottom,
  if (overlap && user.y > puck.y) {
    puck.y = puck.y - 2; // move the puck to the top
  }

  // if the user is on the top,
  if (overlap && user.y < puck.y) {
    puck.y = puck.y + 2; // move the puck to the bottom
  }
}

function checkTarget() {
    const d = dist(puck.x, puck.y, target.x, target.y);

    const overlap = (d < puck.size/2 + target.size/2);

    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;   
    }
}

/**
 * Move the user circle, draw the two circles
 */
function draw() {
  background("#aaaaaa");

  // Move user circle
  moveUser();

  // Draw the user and puck
  drawUser();
  drawPuck();

  // Move the puck
  movePuck();

  // Draw the target circle
  drawTarget();

  // Check if the target is being overlapped by the puck
  checkTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}

// Displays the target circle
function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}
