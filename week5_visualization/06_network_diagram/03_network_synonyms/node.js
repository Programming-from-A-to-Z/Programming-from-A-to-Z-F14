// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Based off of chapter 5 http://natureofcode.com examples


// A node 
function Node(x,y,s) {
  // A VerletParticle instead of an x,y
  this.p = new VerletParticle2D(x,y);
  // Add to the physics world
  physics.addParticle(this.p);
  // Make the particle slightly repulsive
  physics.addBehavior(new AttractionBehavior(this.p, 100, -1));
  
  // The String
  this.word = s;
  // How wide is it?
  this.w = textWidth(this.word) + 8;
  // How tall is it?
  this.h = fs + 8;
  this.drag = false;
  
  // A function to check if a point is inside the node
  this.over = function(x,y) {
    if (x > this.p.x-this.w/2 && x < this.p.x + this.w/2 && y > this.p.y-this.h/2 && y < this.p.y + this.h/2) {
      return true;
    } else {
      return false;
    }
  }
    // Is this being dragged or not?
  this.setDrag = function(bool) {
    this.drag = bool;
  }

  // Drag it somewhere
  // (This should really track an offset for better interaction)
  this.dragIt = function(x,y) {
    // Lock and unlock the Particle when moving
    if (this.drag) {
      this.p.lock();
      this.p.x = x;
      this.p.y = y;
      this.p.unlock();
    }
  }

  // Draw the node
  this.display = function(){
    fill(127);
    stroke(200);
    // Red if being dragged
    if (this.drag) {
      fill(255,0,0);
    }
    strokeWeight(2);
    rectMode(CENTER);
    rect(this.p.x,this.p.y, this.w, this.h);
    textAlign(CENTER);

    // The text
    fill(255);
    noStroke();
    text(this.word, this.p.x, this.p.y + this.h/4);
  }
}

// A connection between two nodes
function Connection(a, b, len) {
  // Make a spring between two particles with a rest length and strength
  var s = new VerletSpring2D(a.p,b.p,len,0.01);
  // Add to the physics world
  physics.addSpring(s);
  this.from = a;
  this.to = b;

  this.display = function() {
    stroke(255);
    line(this.from.p.x, this.from.p.y, this.to.p.x, this.to.p.y);
  }
}