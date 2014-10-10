// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// An array of lines from a text file
var lines;
var frankenstein;
var counter = 0;
var output;
var typed = '';
var typeSound;

// Preload some seed data
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
  typeSound.loop();
  noCanvas();
}

function draw() {
  typed += frankenstein.charAt(counter);
  output.html(typed)
  counter++;
}
