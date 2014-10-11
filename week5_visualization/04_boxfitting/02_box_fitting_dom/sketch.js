// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// A simple box-fitting algorithm
// In an HTML5 Canvas

// An array of boxes
var boxes = [];
// Size of the box
var boxsize = 400;

function setup() {
  // No canvas this time!
  noCanvas();
}

function draw() {

  // Did we find a valid box?
  var found = false;

  // How many times have we tried?
  var count = 0;

  // Keep trying until we find one
  while (!found) {
    // Make a new box
    var b = new Box(boxsize);
    // Does it fit on the screen?
    if (b.fits(boxes)) {
      // If so add make a DIV so we see it!
      b.makeDiv();
      // And add it to the list so we can track it later
      boxes.push(b);
      found = true;
    }
    
    // Have we tried so many times we should stop trying?
    count++;
    if (count > 5000) {
      break;
    }
  }

  // Start with big boxes, shrink them over time
  if (boxsize > 32) { 
    boxsize--;

  // If we can't find spots with small boxes we're done
  } else if (!found) {
    noLoop();
  } 
}

