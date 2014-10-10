// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// A reference to our box2d world
var world;

// A list we'll use to track fixed objects
var boundaries = [];
// A list for all of our rectangles
var boxes = [];

var words = ['this','is','a','test'];

var fs = 24;

var width = 0;
var height = 0;

function setup() {
  noCanvas();
  width = windowWidth;
  height = windowHeight;

  // Initialize box2d physics and create the world
  world = createWorld();

  // Add a bunch of fixed boundaries
  boundaries.push(new Boundary(width/2,height/2,100,50));
  boundaries.push(new Boundary(width/4,height-50,width/2-50,10));
  boundaries.push(new Boundary(3*width/4,height-150,width/2-50,10));

}

function draw() {

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

  // Display all the boxes
  for (var i = boxes.length-1; i >= 0; i--) {
    boxes[i].update();
    if (boxes[i].done()) {
      boxes.splice(i,1);
    }
  }
}
