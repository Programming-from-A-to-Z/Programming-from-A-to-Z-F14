// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Ported from Learning Processing
// https://github.com/shiffman/LearningProcessing


// Some text
var headlines = [
  "Some headline", 
  "Another headline",
];

// Index into the array
var index = 0;

// X position
var x;

// Reference to div created
var div;
function setup() {
  noCanvas();

  // Text is not canvas but a div
  div = createDiv(headlines[index]);
  div.style('font-size','64pt');
  div.style('white-space','nowrap');

  // Where it starts
  x = windowWidth;
} 

function draw() {

  // Decrement x
  x = x - 3;

  // Using CSS absolute positioning
  div.position(x, windowHeight/2);

  // If x is less than the negative width, then it is off the screen
  // We have to get the width from the DOM element
  var w = div.elt.offsetWidth; 

  if (x < -w) {
    x = windowWidth;
    // index is incremented when the current String has left the screen in order to display a new String.
    index = (index + 1) % headlines.length;

    // Update the div's text
    div.html(headlines[index]);
  }
}
