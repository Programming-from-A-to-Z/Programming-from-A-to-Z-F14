// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Force directed graph
// Heavily based on: http://code.google.com/p/fidgen/

// Notice how we are using inheritance here!
// We could have just stored a reference to a VerletParticle object
// inside the Node object, but inheritance is a nice alternative

function Node(x,y,s) {
  this.p = new VerletParticle2D(x,y);
  physics.addParticle(this.p);
  physics.addBehavior(new AttractionBehavior(this.p, 100, -1));
  this.word = s;
  this.w = textWidth(this.word) + 8;
  this.h = fs + 8;
}

Node.prototype.over = function(x,y) {
  if (x > this.p.x-this.w/2 && x < this.p.x + this.w/2 && y > this.p.y-this.h/2 && y < this.p.y + this.h/2) {
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
    this.p.lock();
    this.p.x = x;
    this.p.y = y;
    this.p.unlock();
  }
}

// Override the display method
Node.prototype.display = function(){
  fill(127);
  stroke(200);
  strokeWeight(2);
  rectMode(CENTER);
  rect(this.p.x,this.p.y, this.w, this.h);
  textAlign(CENTER);
  fill(255);
  noStroke();
  text(this.word, this.p.x, this.p.y + this.h/4);
}


function Connection(a, b, len) {
  var s = new VerletSpring2D(a.p,b.p,len,0.1);
  physics.addSpring(s);
  this.from = a;
  this.to = b;

}

Connection.prototype.display = function() {
  stroke(255);
  line(this.from.p.x, this.from.p.y, this.to.p.x, this.to.p.y);
}