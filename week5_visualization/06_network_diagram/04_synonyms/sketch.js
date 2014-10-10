// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Reference to physics world
var physics;

var nodes = [];
var connections = [];

var fs = 12;

var happy;
var delighted;
function preload() {
  happy = loadStrings('happy.txt');
  delighted = loadStrings('delighted.txt');
}

function setup() {
  createCanvas(800,600);
  textSize(fs);

  // Initialize the physics
  physics=new VerletPhysics2D();

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0,0,width,height));
  physics.setDrag(0.1);

  var happyNode = new Node(width/2, height/2, 'happy');
  nodes.push(happyNode);
  var delightedNode;

  var a = 0;
  var radius = 150;
  for (var i = 0; i < happy.length; i++) {
    var n = new Node(width/2+cos(a)*radius, height/2+sin(a)*radius, happy[i]);
    nodes.push(n);
    connections.push(new Connection(happyNode, n, radius));
    a += 2;
    console.log(happy[i]);
    if (happy[i] == 'delighted') {
      delightedNode = n;
    }
  }

  radius = 50;
  for (var i = 0; i < delighted.length; i++) {
    var n = new Node(width/2+cos(a)*radius, height/2+sin(a)*radius, happy[i]);
    nodes.push(n);
    connections.push(new Connection(delightedNode, n, radius));
    a += 1;
  }

}

function draw() {
  background(0);
  physics.update();


  for (var i = 0; i < connections.length; i++) {
    connections[i].display();
  }
  for (var i = 0; i < nodes.length; i++) {
    nodes[i].display();
  }
}



