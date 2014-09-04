// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 9-10: Interactive stripes

// An array of stripes
var stripes = new Array(10);

function setup() {
  createCanvas(640,360);
  
  // Initialize all Stripe objects
  for (var i = 0; i < stripes.length; i ++ ) {
    stripes[i] = new Stripe();
  }
}

function draw() {
  
  background(100);
  // Move and display all Stripe objects
  for (var i = 0; i < stripes.length; i++ ) {
    // Check if mouse is over the Stripe
    stripes[i].rollover(mouseX,mouseY); // Passing the mouse coordinates into an object.
    stripes[i].move();
    stripes[i].display();
  }
}
