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
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
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
  const overlap = (d < user.size/2 + puck.size/2);

  // if the user is on the left, 
  if (overlap && user.x < puck.x) {
    puck.x = puck.x +3; // then move the puck to the right
  }

  //if the user is on the right, 
  if (overlap && user.x > puck.x) {
    puck.x = puck.x -3; // move the puck to the left

  }

  // if the user is on the bottom, 
   if (overlap && user.y > puck.y) {
    puck.y = puck.y -3; // move the puck to the top
  }

  // if the user is on the top, 
  if (overlap && user.y < puck.y) {
    puck.y = puck.y +3; // move the puck to the bottom
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