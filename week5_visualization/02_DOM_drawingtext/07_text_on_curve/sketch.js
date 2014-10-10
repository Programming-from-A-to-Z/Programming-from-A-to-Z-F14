// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 17-8: Characters along a curve 

// The message to be displayed
var message = "text along a curve";

// The radius of a circle
var r = 100;

function setup() {
  noCanvas();


  // 10 boxes along the curve
  // We must keep track of our position along the curve
  var arclength = 0;
  // For every box
  for (var i = 0; i < message.length; i++) {
    var theta = PI + arclength / r;

    var currentChar = message.charAt(i);
    var div = createDiv(currentChar);
    div.style('font-size', '32pt');
    div.position(windowWidth/2+r*cos(theta), windowHeight/2+r*sin(theta));

    var w = div.elt.offsetWidth;
    div.style('line-height','32px');
    div.elt.style.height = '32px';

    var angle = 90 + floor(degrees(theta));
    //div.style('background-color','#999999');
    div.style('transform','rotate('+angle+'deg)');
    arclength += w;
  }


}

