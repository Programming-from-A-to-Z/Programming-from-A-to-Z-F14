// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Ported from Learning Processing
// https://github.com/shiffman/LearningProcessing

// Example 17-8: Characters along a curve 

// The message to be displayed
var message = "text along a curve";

// The radius of a circle
var r = 100;

function setup() {
  noCanvas();

  // 10 characters along the curve
  // We must keep track of our position along the curve
  var arclength = 0;
  // For every box
  for (var i = 0; i < message.length; i++) {

    // The character and its width
    var currentChar = message.charAt(i);

    // Have to deal with spaces differently
    if (currentChar === ' ') {
      currentChar = '&nbsp;';
    }

    // Make the DIV
    var div = createDiv(currentChar);
    div.style('font-size', '32pt');

    // Some position just to get the width
    div.position(0,0);
    var w = div.elt.offsetWidth;

    // Each box is centered so we move half the width
    arclength += w/2;

    // Get the angle
    var theta = PI + arclength / r;
    div.position(windowWidth/2+r*cos(theta), windowHeight/2+r*sin(theta));

    // Set some styling
    div.style('line-height','32px');
    div.style('background-color','#EEEEEE');
    div.style('opacity','0.6');

    // This makes it a little shorter, perhaps a problem?
    div.elt.style.height = '32px';
    
    // CSS transform, convert angle to degrees
    var angle = 90 + floor(degrees(theta));
    div.style('transform','rotate('+angle+'deg)');
    
    // Move halfway again
    arclength += w/2;
  }


}

