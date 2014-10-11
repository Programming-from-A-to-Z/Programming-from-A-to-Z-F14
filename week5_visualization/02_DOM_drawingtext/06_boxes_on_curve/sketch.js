// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Ported from Learning Processing
// https://github.com/shiffman/LearningProcessing

// Example 17-7: Boxes along a curve 

// This example is off and not producing the exact results as
// https://github.com/shiffman/Programming-from-A-to-Z-F14/tree/master/week5_visualization/01_canvas_drawingtext/06_boxes_on_curve

// The radius of a circle
var r = 100;

// The width and height of the boxes
var w = 24;
var h = 24;

function setup() {
  noCanvas();

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

    // Convert to degrees for CSS transform
    var angle = floor(degrees(theta));

    // Make an empty div
    var div = createDiv('');
    // Set position and size
    div.position(windowWidth/2+r*cos(theta), windowHeight/2+r*sin(theta));
    div.size(w, h);

    // Style it
    div.style('background-color','#333333');
    div.style('opacity','0.5');

    // CSS transform
    div.style('transform','rotate('+angle+'deg)');

    // Move halfway again
    arclength += w/2;
  }


}


