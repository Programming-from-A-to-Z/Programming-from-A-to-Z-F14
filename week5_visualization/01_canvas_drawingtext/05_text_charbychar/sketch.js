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
  createCanvas(640, 360);

  // Initialize Letters at the correct x location
  textFont('Georgia');
  textSize(32);
  var x = 10;
  for (var i = 0; i < message.length; i++) {
    // Letter objects are initialized with their location within the String as well as what character they should display.
    letters[i] = new Letter(x, 180, message.charAt(i)); 
    x += textWidth(message.charAt(i));
  }
}

function draw() {
  background(100);
  for (var i = 0; i < letters.length; i++ ) {

    // Display all letters
    letters[i].display();

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
  
  // Display the letter
  this.display = function() {
    fill(0);
    noStroke();
    textAlign(LEFT);
    text(this.letter, this.x, this.y);
  }
  
  // Move the letter randomly
  this.shake = function() {
    this.x += random(-2,2);
    this.y += random(-2,2);
  }
  
  // At any point, the current location can be set back to the home location by calling the home() function.
  this.home = function() { 
    this.x = lerp(this.x, this.homex, 0.1);
    this.y = lerp(this.y, this.homey, 0.1);
  }
}

