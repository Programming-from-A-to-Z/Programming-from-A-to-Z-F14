// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// Based off of chapter 5 http://natureofcode.com examples


// A node 
function Node(x,y,s) {
  // Position
  this.x = x;
  this.y = y;
  // The String
  this.word = s;
  // How wide is it?
  this.w = textWidth(this.word) + 8;
  // How tall is it?
  this.h = fs + 8;
  this.drag = false;
  
  // A function to check if a point is inside the node
  this.over = function(x,y) {
    if (x > this.x-this.w/2 && x < this.x + this.w/2 && y > this.y-this.h/2 && y < this.y + this.h/2) {
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
    if (this.drag) {
      this.x = x;
      this.y = y;
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
    rect(this.x,this.y, this.w, this.h);
    textAlign(CENTER);

    // The text
    fill(255);
    noStroke();
    text(this.word, this.x, this.y + this.h/4);
  }
}

// A connection between two nodes
function Connection(a, b) {
  this.from = a;
  this.to = b;

  this.display = function() {
    stroke(255);
    line(this.from.x, this.from.y, this.to.x, this.to.y);
  }
}

