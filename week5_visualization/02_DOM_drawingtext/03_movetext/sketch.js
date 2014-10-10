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
var div;
function setup() {
  noCanvas();
  div = createDiv(headlines[index]);
  div.style('font-size','64pt');
  div.style('white-space','nowrap');
  x = windowWidth;
} 

function draw() {

  // Decrement x
  x = x - 3;
  div.position(x, windowHeight/2);

  // If x is less than the negative width, then it is off the screen
  // textWidth() is used to calculate the width of the current String.
  var w = div.elt.offsetWidth; 
  if (x < -w) {
    x = windowWidth;
    // index is incremented when the current String has left the screen in order to display a new String.
    index = (index + 1) % headlines.length;
    div.html(headlines[index]);
  }
}
