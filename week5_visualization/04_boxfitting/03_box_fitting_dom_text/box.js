// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// A simple box-fitting algorithm
// In an HTML5 Canvas

// A box has x,y,width,height
function Box(size) {
  // Using the browser page width and height
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.fontSize = floor(random(1,64));
  
  // We have to make the DIV even if we won't use it
  // Just to know how big it is
  this.div = createDiv('testing');
  this.div.style('font-size',this.fontSize+'px');
  this.div.position(this.x,this.y);
  
  this.rotated = false;
  this.w = this.div.elt.offsetWidth;
  this.h = this.div.elt.offsetHeight;
  if (random(1) < 0.5) {
    this.rotated = true;
    this.w = this.div.elt.offsetHeight;
    this.h = this.div.elt.offsetWidth;
    // Whoa, CSS tranforms!  Kind of like translate(), rotate(), in Processing
    // This orients it not from the center
    this.div.style('transform-origin','left top');
    // This rotates it 90 degrees
    this.div.style('transform','translate(' + this.w + 'px) rotate(90deg)');

    this.div.style('text-align','center');
    this.div.style('line-height',this.fontSize+'px');
    // this.div.style('background-color','#AAAAAA');
    // this.div.style('outline','solid #000000 1px');
  }


  this.kill = function() {
    this.div.remove();
  }
  
  // Is this box off the screen?
  this.offscreen = function() {
    // A 2 pixel buffer
    var buffer = 2;
    if (this.x + this.w + buffer  > windowWidth)  return true;
    if (this.y + this.h + buffer  > windowHeight) return true;
    return false;
  }

  // Does this box overlap another box?
  this.overlaps = function(other) {
    var buffer = 2;
    
    // If it's to the right it does not
    if (this.x                   > other.x + other.w + buffer) return false;
    // If it's to the left it does not
    if (this.x + this.w + buffer < other.x)                    return false;
    // If it's below it does not
    if (this.y                   > other.y + other.h + buffer) return false;
    // If it's above it does not
    if (this.y + this.h + buffer < other.y)                    return false;
    // Well if none of these are true then it overlaps
    return true; 
  }
  
  // Check if this box fits on the screen
  // i.e. it does not overlap any other boxes
  this.fits = function(boxes) {
    // If it's off the screen we don't like it
    if (this.offscreen()) {
      return false;
    }

    // If it overlaps any other box we don't like it
    for (var i = 0; i < boxes.length; i++) {
      if (this.overlaps(boxes[i])) {
        return false;
      }
    }
    // Hey, it's ok!
    return true;
  }
}