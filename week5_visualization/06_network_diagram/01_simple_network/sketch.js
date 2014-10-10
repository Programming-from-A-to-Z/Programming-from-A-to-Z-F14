// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var nodes = [];
var connections = [];

var fs = 24;

var words = ['this','is','a','test'];

function setup() {
  createCanvas(800,600);
  textSize(fs);
  for (var i = 0; i < words.length; i++) {
    var n = new Node(random(width),random(height), words[i]);
    nodes.push(n);
    for (var j = 0; j < i; j++) {
      connections.push(new Connection(n,nodes[j]));
    }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < connections.length; i++) {
    connections[i].display();
  }
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].display();
  }
}



