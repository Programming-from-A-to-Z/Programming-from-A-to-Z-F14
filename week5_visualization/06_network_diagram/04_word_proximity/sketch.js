// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

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

  var txt = lines.join(' ');
  var words = txt.split(/\W+/);

  textSize(fs);
  var prevNode;

  var x = 50;
  var y = fs;

  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase().trim();
    var n;
    if (nodes.hasOwnProperty(word)) {
       n = nodes[word];
    } else {
      var n = new Node(x, y, word);
      keys.push(word);
      nodes[word] = n;

      x += n.w*2;
      if (x > width) {
        x = 50;
        y += n.h*2;
      }
    }

    if (prevNode != null) {
      connections.push(new Connection(n,prevNode));
    }
    prevNode = n;
  }
}

function draw() {
  background(0);
  for (var i = 0; i < connections.length; i++) {
    connections[i].display();
  }
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    nodes[key].display();
  }
}



