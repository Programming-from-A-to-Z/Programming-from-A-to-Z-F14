// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is from chapter 5
// http://natureofcode.com

// But now instead of rectangles is text

// A reference to our box2d world
var world;

// A list we'll use to track fixed objects
var boundaries = [];
// A list for all of our rectangles
var boxes = [];

// Random assortment of words
var words = ['this','is','a','test'];

// Font size
var fs = 16;

function setup() {
  createCanvas(800,600);

  // Initialize box2d physics and create the world
  world = createWorld();

  textSize(24);

  // Add a bunch of fixed boundaries
  boundaries.push(new Boundary(width/4,height-5,width/2-50,10));
  boundaries.push(new Boundary(3*width/4,height-50,width/2-50,10));
}

function draw() {
  background(51);

  // We must always step through time!
  var timeStep = 1.0/30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep,10,10);

  // Boxes fall from the top every so often
  if (random(1) < 0.2) {
    var r = floor(random(words.length));
    var b = new Box(width/2,30,words[r]);
    boxes.push(b);
  }

  // Display all the boundaries
  for (var i = 0; i < boundaries.length; i++) {
    boundaries[i].display();
  }

  // Display all the boxes
  for (var i = boxes.length-1; i >= 0; i--) {
    boxes[i].display();
    if (boxes[i].done()) {
      boxes.splice(i,1);
    }
  }
}




