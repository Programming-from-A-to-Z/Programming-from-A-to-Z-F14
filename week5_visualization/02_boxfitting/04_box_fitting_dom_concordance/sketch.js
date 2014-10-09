// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14


// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// A simple box-fitting algorithm
// In an HTML5 Canvas

// An array of boxes
var boxes = [];

// For counting the words
var index = 0;

var loaded = false;

function setup() {
  // No canvas this time!
  noCanvas();
  // This will hold every word and its count
  concordance = new Concordance();

  // Just loading from a file for simplicity
  var stuff = loadStrings('data/hamlet.txt', process);
}

function process(data) {
  var text;

  // Did we get an array from loadStrings()
  // or just some raw text
  if (data instanceof Array) {
    text = data.join(' ');
  } else {
    text = data;
  }
  
  // Process this data
  concordance.process(text);
  // Sort
  concordance.sortByCount();

  loaded = true;

}

function draw() {
  if (loaded) {
    // Get all the words
    var keys = concordance.getKeys();
  
    // Did we find a valid box?
    var found = false;

    // How many times have we tried?
    var count = 0;

    // Keep trying until we find one
    while (!found) {
      // Make a new box
      var count = concordance.getCount(keys[index]);
      var b = new Box(keys[index], 10*floor(log(count)));

      // Does it fit on the screen?
      if (b.fits(boxes)) {
        // Add it to the list so we can track it later
        boxes.push(b);
        found = true;
      } else {
        // If not kill that DIV
        b.kill();
      }
      
      // Have we tried so many times we should stop trying?
      count++;
      if (count > 10) {
        console.log('no spot on word ' + index + ' out of ' + keys.length);
        break;
      }
    }

    if (found) {
       console.log('Found! On ' + index + ' out of ' + keys.length);
      index++;
    }
    

  }
}

// A box has x,y,width,height
function Box(word, size) {
  // Using the browser page width and height
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.fontSize = size;

  this.div = createDiv(word);
  this.div.style('font-size',this.fontSize+'px');
  this.div.position(this.x,this.y);
  this.div.style('text-align','center');
  this.div.style('line-height',this.fontSize+'px');
  
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
  }

  this.kill = function() {
    this.div.remove();
  }
  
  // Is this box off the screen?
  this.offscreen = function() {
    // A N pixel buffer
    var buffer = 0;
    if (this.x + this.w + buffer  > windowWidth)  return true;
    if (this.y + this.h + buffer  > windowHeight) return true;
    return false;
  }

  // Does this box overlap another box?
  this.overlaps = function(other) {
    var buffer = 0;
    
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

