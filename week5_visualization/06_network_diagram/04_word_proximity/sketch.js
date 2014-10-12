// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Based off of chapter 5 http://natureofcode.com examples

// This example now connects words that are next to each other
var physics;

// A dictionary of words in the speech
var nodes = {};

// Connections
var connections = [];

// Let's track the keys in their own array
var keys = [];

// font size
var fs = 12;

// Preload the data
var lines;
function preload() {
  lines = loadStrings('data/obama_short.txt');
}

function setup() {
  createCanvas(800,600);

  // Initialize the physics
  physics=new VerletPhysics2D();

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0,0,width,height));
  physics.setDrag(0.1);
  
  // Chop up the data into words
  var txt = lines.join(' ');
  var words = txt.split(/(\s+|[.?!"])/);

  textSize(fs);

  // Each word will be connected to the one it is next to (previous)
  var prevNode;

  // Go through all the words
  for (var i = 0; i < words.length; i++) {
    // Make everyhting lower case
    var word = words[i].toLowerCase().trim();
    // Ignore short words
    if (word.length > 2) {
      // The node
      var n;
      // If it's already in the dictionray
      if (nodes.hasOwnProperty(word)) {
         n = nodes[word];
      // Otherwise it should be a new node
      } else {
        var n = new Node(random(width), random(height), word);
        // Track the key
        keys.push(word);
        // Put it in the dictionary
        nodes[word] = n;
      }
      // Connect it to the previous one
      if (prevNode != null) {
        connections.push(new Connection(n,prevNode,100));
      }
      prevNode = n;
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
  // Note how we have to iterate over the array of keys
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    nodes[key].dragIt(mouseX, mouseY);
    nodes[key].display();
  }
}

// This is all for mouse interaction
function mousePressed() {
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (nodes[key].over(mouseX, mouseY)) {
      nodes[key].setDrag(true);
    }
  }
}

function mouseReleased() {
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    nodes[key].setDrag(false);
  }
}



