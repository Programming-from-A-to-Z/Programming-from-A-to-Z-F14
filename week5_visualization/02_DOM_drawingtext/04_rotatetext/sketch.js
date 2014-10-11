// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Ported from Learning Processing
// https://github.com/shiffman/LearningProcessing

// Example 17-5: Rotating text 

var message = "this text is spinning";
var angle = 0;

function setup() {
  noCanvas();

  // A div instead of canvas
  div = createDiv(message);
  div.style('font-size','64pt');
  // In order to know the width of this div, I have to first give it an absolute position
  div.position(0,0);
  // Now I'll move it to its actual spot
  div.position(windowWidth/2- div.elt.offsetWidth/2, windowHeight/2);
  //div.style('background-color','#AAAAAA');
  div.style('textAlign','CENTER');
} 

function draw() {

  // Using a CSS transform
  div.style('transform','rotate('+angle+'deg)');

  // The angle is in degrees!
  angle++;
}
