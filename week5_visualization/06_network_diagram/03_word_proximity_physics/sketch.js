// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Reference to physics world
var physics;

var nodes = {};
var connections = [];
var keys = [];

var fs = 12;

var lines;
function preload() {
  lines = loadStrings('obama_short.txt');
}

function setup() {
  createCanvas(800,600);

  // Initialize the physics
  physics=new VerletPhysics2D();

  // Set the world's bounding box
  physics.setWorldBounds(new Rect(0,0,width,height));
  physics.setDrag(0.1);

  var txt = lines.join(' ');
  var words = txt.split(/\W+/);

  textSize(fs);
  var prevNode;

  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase().trim();
    var n;
    if (nodes.hasOwnProperty(word)) {
       n = nodes[word];
    } else {
      var n = new Node(width/2+random(-2,2), height/2+random(-2,2), word);
      keys.push(word);
      nodes[word] = n;
    }

    if (prevNode != null) {
      connections.push(new Connection(n,prevNode));
    }
    prevNode = n;
  }
}

function draw() {
  background(0);
  physics.update();


  for (var i = 0; i < connections.length; i++) {
    connections[i].display();
  }
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    nodes[key].display();
  }
}



