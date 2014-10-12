// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Based off of chapter 5 http://natureofcode.com examples

// This example is exactly the same but with physics added
// Nodes are connected by Springs

// A bunch of nodes
// And connections between the nodes
// (An alternate way of doing this might be to have the 
// nodes store their own connections)
var nodes = [];
var connections = [];

// Font size
var fs = 24;

// A toxiclibs physics world
var physics;

function setup() {

  // Make a canvas
  createCanvas(800,600);

  // Initialize the physics
  physics=new VerletPhysics2D();

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0,0,width,height));
  physics.setDrag(0.05);

  // set the size
  textSize(fs);

  // Make some arbitrary nodes
  nodes[0] = new Node(100, 100, 'test');
  nodes[1] = new Node(200, 200, 'network');
  nodes[2] = new Node(300, 100, 'itp');
  nodes[3] = new Node(400, 200, 'javascript');
  
  // Connect the nodes
  connections[0] = new Connection(nodes[0], nodes[1], 150);
  connections[1] = new Connection(nodes[0], nodes[2], 150);
  connections[2] = new Connection(nodes[1], nodes[3], 150);
  connections[3] = new Connection(nodes[1], nodes[2], 150);
}

function draw() {
  background(0);

  // Update the physics
  physics.update();

  // Draw all the connections
  for (var i = 0; i < connections.length; i++) {
    connections[i].display();
  }

  // Draw all the nodes
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].dragIt(mouseX, mouseY);
    nodes[i].display();
  }
}

// This code is all for user dragging the nodes
function mousePressed() {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].over(mouseX, mouseY)) {
      nodes[i].setDrag(true);
    }
  }
}

function mouseReleased() {
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].setDrag(false);
  }
}

