// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// An array of lines from a text file
var lines;

// This will be the full text
var frankenstein;

// A counter to check the characters
var counter = 0;

// This is the output text
var output;

// We'll accumulate all the text here
var typed = '';

// A sound 
var typeSound;

// Preload text and sound
function preload() {
  typeSound = loadSound('data/typewriter-1.mp3');
  lines = loadStrings('data/frankenstein.txt');
}

function setup() {
  // Join everything together in one long string
  // Keep carriage returns so these will show up in the markov generator
  frankenstein = lines.join('<br/>');

  // Make the output element
  output = createP('');

  // Play the sound
  typeSound.loop();

  // No canvas
  noCanvas();
}

function draw() {
  // Build up the string character by character
  typed += frankenstein.charAt(counter);
  // Place the text in the DOM
  output.html(typed)

  // Go to the next character
  if (counter < frankenstein.length-1) {
    counter++;
  }
}
