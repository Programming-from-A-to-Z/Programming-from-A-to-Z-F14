// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-5: Rotating text 
var headlines = [
  "Some headline", 
  "Another headline",
];
var index = 0;

var x;

function setup() {
  createCanvas(640, 480);
  x = width;
} 

function draw() {
  background(51);
  // You can use any available web font

  textAlign(LEFT);
  textSize(32);

  // A specific String from the array is displayed according to the value of the "index" variable.
  fill(255);
  noStroke();
  text(headlines[index], x, height - 40); 

  // Decrement x
  x = x - 3;

  // If x is less than the negative width, then it is off the screen
  // textWidth() is used to calculate the width of the current String.
  var w = textWidth(headlines[index]); 
  if (x < -w) {
    x = width;
    // index is incremented when the current String has left the screen in order to display a new String.
    index = (index + 1) % headlines.length;
  }
}
