// Using find.

var p0;
var p1;
var p2;

function setup() {
  noCanvas();

  p0 = createP("paragraph 0");
  p1 = createP("paragraph 1");
  p2 = createP("paragraph 2");

  // Let's give the first two elements class donkey, and the third class yogurt.
  p0.class('donkey');
  p1.class('donkey');
  p2.class('yogurt');
};


function draw() {

  
};

// On mouse press, hide all elements with class donkey.
function mousePressed() {
  var donkeys = getElements('donkey');
  for (var i=0; i<donkeys.length; i++) {
    donkeys[i].hide();
  }
};

// Temporary until https://github.com/lmccart/p5.js/pull/354
function noCanvas() {
  var c = document.getElementById('defaultCanvas');
  if (c) {
    c.parentNode.removeChild(c);
  }
}




