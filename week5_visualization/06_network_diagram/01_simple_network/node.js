// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Force directed graph
// Heavily based on: http://code.google.com/p/fidgen/

// Notice how we are using inheritance here!
// We could have just stored a reference to a VerletParticle object
// inside the Node object, but inheritance is a nice alternative

function Node(x,y,s) {
  this.x = x;
  this.y = y;
  this.word = s;
  this.w = textWidth(this.word) + 8;
  this.h = fs + 8;
  this.drag = false;
}

Node.prototype.over = function(x,y) {
  if (x > this.x-this.w/2 && x < this.x + this.w/2 && y > this.y-this.h/2 && y < this.y + this.h/2) {
    return true;
  } else {
    return false;
  }
}

Node.prototype.setDrag = function(bool) {
  this.drag = bool;
}

Node.prototype.dragIt = function(x,y) {
  if (this.drag) {
    this.x = x;
    this.y = y;
  }
}

// Override the display method
Node.prototype.display = function(){
  fill(127);
  stroke(200);
  if (this.drag) fill(255,0,0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(this.x,this.y, this.w, this.h);
  textAlign(CENTER);
  fill(255);
  noStroke();
  text(this.word, this.x, this.y + this.h/4);
}


function Connection(a, b) {
  this.from = a;
  this.to = b;
}

Connection.prototype.display = function() {
  stroke(255);
  line(this.from.x, this.from.y, this.to.x, this.to.y);
}