// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-7: Boxes along a curve 

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
    var angle = floor(degrees(theta));
    console.log(theta);
    var div = createDiv('');
    div.style('background-color','#333333');
    div.position(windowWidth/2+r*cos(theta), windowHeight/2+r*sin(theta));
    div.size(w, h);
    div.style('opacity','0.5');
    div.style('transform','rotate('+angle+'deg)');
    // Move halfway again
    arclength += w/2;
  }


}


