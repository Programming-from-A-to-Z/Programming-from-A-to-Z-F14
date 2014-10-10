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
  this.word = s;
  this.w = textWidth(this.word) + 8;
  this.h = fs + 8;
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


function Connection(a, b) {
  var s = new VerletSpring2D(a.p,b.p,200,0.5);
  physics.addSpring(s);
  this.from = a;
  this.to = b;

}

Connection.prototype.display = function() {
  stroke(255);
  line(this.from.p.x, this.from.p.y, this.to.p.x, this.to.p.y);
}