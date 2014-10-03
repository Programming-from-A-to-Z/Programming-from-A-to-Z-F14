
// Daniel Shiffman
// Programming from A to Z, Fall 2014
// https://github.com/shiffman/Programming-from-A-to-Z-F14

// This is the same sketch as the first exampel but just uses the RiTa library

// The Markov Generator object
var generator;

function setup() {
  noCanvas();
  // The Markov Generator
  // First argument is N-gram length, second argument is max length of generated text
  generator = new RiMarkov(2);
  generator.loadFrom('data/itp.txt');
  // Set up a button
  var button = getElement('button');
  button.mousePressed(generate);
  noCanvas();
}

function generate() {
  // Display the generated text
  var output = getElement('name');
  var text = generator.generateSentences(1);
  output.html(text[0]);
}
