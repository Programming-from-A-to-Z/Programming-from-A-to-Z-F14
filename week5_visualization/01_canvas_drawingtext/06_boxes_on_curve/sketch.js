// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Ported from Learning Processing
// https://github.com/shiffman/LearningProcessing

// Example 17-7: Boxes along a curve 

// The radius of a circle
var r = 100;

// The width and height of the boxes
var w = 24;
var h = 24;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(100);

  // Start in the center and draw the circle
  translate(width/2, height/2);
  noFill();
  stroke(0);
  // Our curve is a circle with radius r in the center of the window.
  ellipse(0, 0, r*2, r*2); 
  // 10 boxes along the curve
  var totalBoxes = floor(TWO_PI*r/w);
  // We must keep track of our position along the curve
  var arclength = 0;
  // For every box
  for (var i = 0; i < totalBoxes; i++) {
    // Each box is centered so we move half the width
    arclength += w/2; 

    // Angle in radians is the arclength divided by the radius
    var theta = arclength / r;

    push();
    // Polar to cartesian coordinate conversion
    translate(r*cos(theta), r*sin(theta));
    // Rotate the box
    rotate(theta);

    // Display the box
    fill(0, 100);
    rectMode(CENTER);
    rect(0, 0, w, h);
    pop();

    // Move halfway again
    arclength += w/2;
  }
}

