// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Ported from Learning Processing
// https://github.com/shiffman/LearningProcessing

// Example 17-6: Text breaking up 

var message = "click mouse to shake it up";

// An array of Letter objects
var letters = [];

function setup() {
  noCanvas();

  // Initialize Letters at the correct x location
  var x = 20;
  for (var i = 0; i < message.length; i++) {
    // Letter objects are initialized with their location within the String as well as what character they should display.
    var s = message.charAt(i);
    if (s === ' ') {
      s = '&nbsp;';
    }

    letters[i] = new Letter(x, 180, s); 
    x += letters[i].getWidth();
  }
}

function draw() {
  for (var i = 0; i < letters.length; i++ ) {
    // If the mouse is pressed the letters shake
    // If not, they return to their original location
    if (mouseIsPressed) {
      letters[i].shake();
    } else {
      letters[i].home();
    }
  }
}

// A class to describe a single Letter
function Letter(x_, y_, letter_) {
  
  // The object knows its original " home " location
  this.homex = x_;
  this.homey = y_;
  this.x = x_;
  this.y = y_;
  this.letter = letter_;
  
  // Each letter is a div with absolute positioning
  this.div = createDiv(this.letter);
  this.div.position(this.x, this.y);
  this.div.style('font-family','Georgia');
  this.div.style('font-size', '64pt');

  // What is the width of this Letter
  this.getWidth = function() {
    return this.div.elt.offsetWidth;
  }

  // Move the letter randomly
  this.shake = function() {
    this.x += random(-2,2);
    this.y += random(-2,2);

    // If it moves update the position
    this.div.position(this.x, this.y);
  }
  
  // At any point, the current location can be set back to the home location by calling the home() function.
  this.home = function() { 
    this.x = lerp(this.x, this.homex, 0.1);
    this.y = lerp(this.y, this.homey, 0.1);

    // If it moves update the position
    this.div.position(this.x, this.y);
  }
}

