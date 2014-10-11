// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// An array of lines from a text file
var lines;

// This will be the full text
var frankenstein;

// A counter to check the characters
var counter = 0;

// A counter to check the characters
var counter = 0;

// A sound 
var typeSound;

// Now we have all the DIVs in an array
var divs = [];

// a DIV to hold all the other divs
var output;

// Preload text and sound
function preload() {
  typeSound = loadSound('data/typewriter-1.mp3');
  lines = loadStrings('data/frankenstein.txt');
}

function setup() {
  // Join everything together in one long string
  // Keep carriage returns so these will show up in the markov generator
  frankenstein = lines.join('\n');

  // Make the output element
  output = createDiv('');

  // Play the sound
  typeSound.loop();

  // No canvas
  noCanvas();
}

function draw() {
  
  // Which character are we on?
  var s = frankenstein.charAt(counter);

  // We need to treat linebreaks differently
  var linebreak = false;

  // If it's a space
  if (s === ' ') {
    s = '&nbsp;';
  // If it's a line break
  } else if (s === '\n') {
    s = '<br/>';
    linebreak = true;
  }
  
  // Make the DIV for one character
  var div = createDiv(s);

  // Linebreaks need to be inline-block so that the text will wrap properly
  if (!linebreak) {
    div.style('display','inline-block');
  // Everything else should just be inline
  } else {
    div.style('display','inline');  
  }
  // This strategy is needed if we want each character to have
  // its own CSS (like a different size)
  var r = floor(random(4,32));
  div.style('font-size',r+'pt');

  // Keep everything in a parent div
  div.parent(output);

  // Go to the next character
  if (counter < frankenstein.length-1) {
    counter++;
  }
}
