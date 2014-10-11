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

  // If we've got the data
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
        // console.log('no spot on word ' + index + ' out of ' + keys.length);
        break;
      }
    }

    if (found) {
      // console.log('Found! On ' + index + ' out of ' + keys.length);
      index++;
    }
    
  }
}

