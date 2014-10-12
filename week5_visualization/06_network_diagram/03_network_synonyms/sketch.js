// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Based off of chapter 5 http://natureofcode.com examples

// This example now uses some synonym data
// Hardcoded from text files
// But could pull from an API like wordnik, wordnet, etc.

// A bunch of nodes
// And connections between the nodes
// (An alternate way of doing this might be to have the 
// nodes store their own connections)
var nodes = [];
var connections = [];

// Font size
var fs = 12;

// A toxiclibs physics world
var physics;

// Input data
var happy, delighted;
function preload() {
  // Preload the data
  happy     = loadStrings('data/happy.txt');
  delighted = loadStrings('data/delighted.txt');
}

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
  
  // Make a node for the word happy
  var happyNode = new Node(width/2, height/2, 'happy');
  nodes.push(happyNode);

  // We'll need to track the word delighted too
  var delightedNode;

  for (var i = 0; i < happy.length; i++) {
    // Just place all the nodes randomly, the forces will work
    // out the arrangement
    var n = new Node(random(width),random(height), happy[i]);
    nodes.push(n);

    // Connect happy to each synonym
    connections.push(new Connection(happyNode, n, 150));

    // If it's the word delighted let's connect it to its synonyms
    if (happy[i] == 'delighted') {
      for (var j = 0; j < delighted.length; j++) {
        var n2 = new Node(100, 100+random(-1,1), delighted[j]);
        nodes.push(n2);
        connections.push(new Connection(n, n2, 50));
      }
    }
  }

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

