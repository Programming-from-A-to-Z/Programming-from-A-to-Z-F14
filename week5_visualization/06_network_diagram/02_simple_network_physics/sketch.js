// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Reference to physics world
var physics;

var nodes = [];
var connections = [];

var fs = 24;


function setup() {
  createCanvas(800,600);

  // Initialize the physics
  physics=new VerletPhysics2D();

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0,0,width,height));
  physics.setDrag(0.05);

  textSize(fs);
  nodes[0] = new Node(100,100,'test');
  nodes[1] = new Node(200,200,'network');
  nodes[2] = new Node(300,100,'itp');
  nodes[3] = new Node(400,200,'javascript');
  
  connections[0] = new Connection(nodes[0],nodes[1], 200);
  connections[1] = new Connection(nodes[0],nodes[2], 150);
  connections[2] = new Connection(nodes[1],nodes[3], 175);
  connections[3] = new Connection(nodes[1],nodes[2], 105);
}

function draw() {
  physics.update();

  background(0);
  for (var i = 0; i < connections.length; i++) {
    connections[i].display();
  }
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].dragIt(mouseX, mouseY);
    nodes[i].display();
  }
}

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



